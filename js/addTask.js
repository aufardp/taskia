// File ini untuk penghubung antara UI HTML dan model User

document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("taskForm");
  const taskManager = new Task();

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskData = {
      taskName: document.getElementById("taskName").value,
      taskPriority: document.getElementById("taskPriority").value,
    };

    const result = taskManager.saveTasks(taskData);

    if (result.success) {
      // return (window.location.href = "../signin.html");
      alert("Berhasil disimpan");
    } else {
      console.log("Proses simpan data gagal");
    }
  });
});
