const express = require('express');
const app = express();
app.use(express.json());

let students = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eva' }
];


app.get('/', (req, res) => {
    res.json(students);

});

app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    if (!student) return res.status(404).json({message:'Student not found'});
    res.json(student);
});
app.post('/students', (req, res) => {
    const {name} = req.body;
    if (!name) return  res.status(400).json({message:'Name is required'});
    const newStudent = {
        id: students.length + 1,
        name,
    };
    students.push(newStudent);
    res.status(201).json(newStudent); //201 siemrpre va hacer la respuesta a una creacion exitosa
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
