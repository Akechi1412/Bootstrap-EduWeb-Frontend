/*==============Add course opion list=============*/
var courseOptionList = {
    'Khóa video': [
        'Toán',
        'Vật lý',
        'Hóa học',
        'Sinh học'
    ],
    'Khóa live': [
        'Toán',
        'Vật lý',
        'Hóa học',
    ]
};

var courseList = [];

var courseTypeTag = document.getElementById('courseType');

for (let key in courseOptionList) {
    courseTypeTag.innerHTML += `<option value="${key}">${key}</option>`;
}

function changeCourseType() {
    let key = courseTypeTag.value;
    let facultyList = courseOptionList[key];
    let courseFaculty = document.getElementById('courseFaculty');
    courseFaculty.innerHTML = '<option value="" selected>--Choose--</option>';
    if (facultyList != undefined) {
        for (let item of facultyList) {
            courseFaculty.innerHTML += `<option value="${item}">${item}</option>`;
        }
    }
}

/*===============Add course============== */
var count = 0;

function addCourse() {
    let index = document.getElementById('index').value;
    let courseName = document.getElementById('courseName').value;
    let courseLecturer = document.getElementById('courseLecturer').value;
    let coursePrice = document.getElementById('coursePrice').value;
    let courseType = document.getElementById('courseType').value;
    let courseFaculty = document.getElementById('courseFaculty').value;
    let courseDescription = document.getElementById('courseDescription').value;

    var course = {
        'courseName': courseName,
        'courseLecturer': courseLecturer,
        'courseType': courseType,
        'coursePrice': coursePrice,
        'courseFaculty': courseFaculty,
        'courseDescription': courseDescription
    }

    if (index >= 0) {
        courseList[index] = course;
    } else {
        courseList.push(course);
    }
    document.getElementById('index').value = -1;
    showCourseList();
}

function showCourseList() {
    document.getElementById('courseResult').innerHTML = '';
    for (let i = 0; i < courseList.length; ++i) {
        document.getElementById('courseResult').innerHTML +=
            `<tr>
        <td>${i + 1}</td>
        <td>${courseList[i].courseName}</td>
        <td>${courseList[i].courseLecturer}</td>
        <td>${courseList[i].courseType}</td>
        <td>${courseList[i].courseFaculty}</td>
        <td>${courseList[i].coursePrice}</td>
        <td><div>${courseList[i].courseDescription}</div></td>
        <td><button class="w-100 btn btn-warning btn-edit" onclick="editCourse(${i})">Edit</button></td>
        <td><button class="w-100 btn btn-danger btn-delete" onclick="deleteCourse(${i})">Delete</button></td>
        </tr>`
    }
}

/*====================Delete course================= */
function deleteCourse(index) {
    courseList.splice(index, 1);
    showCourseList();
}

/*=====================Edit course================== */
function editCourse(index) {
    document.getElementById('index').value = index;
    document.getElementById('courseName').value = courseList[index].courseName;
    document.getElementById('courseLecturer').value = courseList[index].courseLecturer;
    document.getElementById('courseType').value = courseList[index].courseType;
    changeCourseType();
    document.getElementById('courseFaculty').value = courseList[index].courseFaculty;
    document.getElementById('coursePrice').value = courseList[index].coursePrice;
    document.getElementById('courseDescription').value = courseList[index].courseDescription;
}