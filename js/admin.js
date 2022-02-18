import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-auth.js";
import {
  get,
  ref,
  remove,
  update,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
import { auth, db } from "./util.js";

const login = async function (e) {
  e.preventDefault();
  console.log(e);
  console.log("In login");
  await signInWithEmailAndPassword(
    auth,
    e.target.email.value,
    e.target.password.value
  );
  console.log(await getHomepageContent());
  renderHomepageContent(await getHomepageContent());
};

const getHomepageContent = async function () {
  return (await get(ref(db, "homepage/committees"))).val();
};

const updateCommitteeData = async function (committee_id, data) {
  return await update(ref(db, `homepage/committees/${committee_id}`), data);
};

const removeCommittee = async function (committee_id) {
  return await remove(ref(db, `homepage/committees/${committee_id}`));
};

const renderHomepageContent = function (data = []) {
  document.querySelector("#admin-div").classList.add("hidden"); //hide login form
  document.querySelector("#panel-container").classList.remove("hidden"); //make panel visible
  document.querySelector("#panel-container").innerHTML = ""; //clear htmlcontent
  /*
	const title_parent = document.createElement('div');
	title.classList.add('committee-title');
	const 
	title.appendChild()
	document.createElement('div')
	*/
  const card = ({ id, name, description }) => `
      <div id="${id}">
        <div class="committee-title">
          <input type="text" value="${name}" />
        </div>
        <div class="committee-description">
          <textarea rows="5" cols="25">${description}</textarea>
        </div>
        <div class="delete"><button class='button'>Delete</button></div>
        <div class="save"><button class='button'>Save</button></div>
      </div>
	`;
  for (const i in data)
    document.getElementById("panel-container").innerHTML += card({
      id: i,
      ...data[i],
    });

  document.querySelectorAll(".save").forEach((el) =>
    el.addEventListener("click", async function (e) {
      try {
        await updateCommitteeData(e.target.parentElement.parentElement.id, {
          name: e.target.parentElement.parentElement
            .querySelector(".committee-title")
            .querySelector("input").value,
          description: e.target.parentElement.parentElement
            .querySelector(".committee-description")
            .querySelector("textarea").value,
        });
        alert("Committee updated successfully");
        //rerender page
        renderHomepageContent(await getHomepageContent());
      } catch (e) {
        console.log(e);
        alert("Error saving committee");
      }
    })
  );

  document.querySelectorAll(".delete").forEach((el) =>
    el.addEventListener("click", async function (e) {
      try {
        await removeCommittee(e.target.parentElement.parentElement.id);
        alert("Committee deleted successfully");
        //rerender page
        renderHomepageContent(await getHomepageContent());
      } catch (e) {
        console.log(e);
        alert("Error deleting committee");
      }
    })
  );
};

document.querySelector("#admin-form").addEventListener("submit", login);
