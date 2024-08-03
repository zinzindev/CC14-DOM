const jobs = [
	{ id: 1, title: 'Learn HTML', done: false },
	{ id: 2, title: 'Learn CSS', done: false },
	{ id: 3, title: 'Learn Javascript', done: false },
	{ id: 4, title: 'Learn DOM', done: false },
	{ id: 5, title: 'Learn React', done: false },
	// { id: 6, title: 'inp.value', done: false },
];
let editIdx = -1;
let replaceTitle = '';

function render() {
	const allJobItems = jobs.map((el, i) => {
		if (editIdx !== i) {
			return `
			<div class="job-item">
				<input type="text" readonly value="${el.title}"
					onclick="changeStatus(${el.id})";
					class=${el.done ? 'done' : 'undone'}
				/>
				<button onclick='setEdit(${el.id})'>Edit</button>
				<button onclick="deleteJob(${el.id})">Delete</button>
			</div>
			`;
		} else {
			return `
			<div class="job-item">
				<input type="text" value="${el.title}"
					onkeyup="setReplaceTitle(event)"
					class="editmode"
				/>
				<button onclick="changeTitle(${el.id})">Save</button>
				<button onclick="deleteJob(${el.id})">Delete</button>
			</div>
			`;
		}
	});
	const jobList = document.querySelector('.job-list');
	// jobList.innerHTML = allJobItems;// ติด , มาด้วย
	jobList.innerHTML = allJobItems.join('');
	if (editIdx !== -1) {
		const inp = jobList.children[editIdx].children[0];
		// console.log(inp);
		inp.setSelectionRange(0, inp.value.length);
		inp.focus();
	}
}

render();

const jobForm = document.querySelector('.job-form');
jobForm.onsubmit = function (evt) {
	// console.log(evt.target.elements[0].value);
	evt.preventDefault();
	let newTitle = evt.target.elements[0].value;
	if (!newTitle.trim()) {
		return;
	}
	// alert(newTitle);
	const newId = jobs[jobs.length - 1].id + 1;
	// alert(newId);
	// const done = false;
	const newJob = {
		id: newId,
		title: newTitle,
		// done: done
		// done
		done: false,
	};
	// console.log(newJob);
	jobs.push(newJob);
	// console.log(jobs);
	jobForm.reset();
	render();
};

function deleteJob(id) {
	// ลบข้อมูลตาม id
	const idx = jobs.findIndex((el) => el.id === id);
	jobs.splice(idx, 1);
	render();
}

function changeStatus(id) {
	const idx = jobs.findIndex((el) => el.id === id);
	jobs[idx].done = !jobs[idx].done;
	console.log(jobs);
	render();
}

function setEdit(id) {
	const idx = jobs.findIndex((el) => el.id === id);
	editIdx = idx;
	replaceTitle = jobs[idx].title;
	render();
}

function setReplaceTitle(evt) {
	replaceTitle = evt.target.value;
	console.log(replaceTitle);
}

function changeTitle(id) {
	const idx = jobs.findIndex((el) => el.id === id);
	jobs[idx].title = replaceTitle;
	editIdx = -1;
	render();
}
