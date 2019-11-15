const express = require("express")
const router  = express.Router();
const Cuenta  = require("../models/cuenta")


router.get("/", async (req, res) => {
	let cuenta = await Cuenta.find({})
	res.json(cuenta)
})

router.get('/editar/:id', async (req, res) => {
	let cuenta = await Cuenta.findById(req.params.id)
	res.json(cuenta)
});

router.post('/', async (req, res) => {
	let cuenta = new Cuenta(req.body)
	await cuenta.save();
	res.json({
		status: 'Cuenta Guardada'
	});
});

router.put('/editar/:id', async (req, res) => {
	let cuenta = await Cuenta.findById(req.params.id);
	cuenta.no_cuenta     = req.body.no_cuenta
	cuenta.nombre_cuenta = req.body.nombre_cuenta
	await cuenta.save()
	res.json({
		status:"Editado con exito"
	})
});

/*
// ADD: RENDERING VIEW TASK FORM
router.get('/add', (req, res) => {
	res.render('tasks/add');
});

// SAVE A TASK
router.post('/add', async (req, res) => {
  let { title, details} = req.body;
  let errors = [];

  if (!title) {
	errors.push({text: 'Please add a title'});
  }
  if (!details) {
	errors.push({text: 'Please add a Detail'});
  }

  // Rendering Error
  if (errors.length > 0) {
	res.render('tasks/add', {
	  errors,
	  title,
	  details
	});
  }
  else { // Saving Task
	const newTask = {
	  title: req.body.title,
	  details: req.body.details,
	  user: req.user.id
	}
	let task = new Task(newTask);
	await task.save();
	req.flash('success_msg', 'Task added.');
	res.redirect('/tasks');
  }
});

// RENDEDERING TASKS
router.get('/', async (req, res) => {
  let tasks = await Task.find({user: req.user.id})
			  .sort({date: 'desc'});
  res.render('tasks/index', {
	tasks
  });
});

// RENDERING TASK EDIT
router.get('/edit/:id', async (req, res) => {
  let task = await Task.findById(req.params.id);
  if (task.user != req.user.id) {
	req.flash('error_msg', 'Not Authorized');
	res.redirect('/tasks');
  } else {
	res.render('tasks/edit', {
	  task
	});
  }
});

// EDITING
router.put('/edit/:id', async (req, res) => {
  let task = await Task.findById(req.params.id);
  task.title = req.body.title;
  task.details = req.body.details;
  await task.save();
  req.flash('success_msg', 'Task updated.');
  res.redirect('/tasks');
});

// DELETE TASK
router.delete('/delete/:id', async (req, res) => {
  await Task.removeById(req.params.id);
  req.flash('success_msg', 'Task removed.');
  res.redirect('/tasks');
});*/

module.exports = router;
