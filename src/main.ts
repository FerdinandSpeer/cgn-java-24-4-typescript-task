type Student = {
    firstName: string,
    lastName: string,
    age: number,
    //Step 2/3: Allow strings and numbers as grades Task and undefined
    grades: (number | string | undefined) []
}

const Student1:Student = {
    firstName: 'Anton',
    lastName: 'Maier',
    age: 17,
    grades: ["A",2,undefined,3,1,"B",undefined,5]
};

console.log(Student1);

//Step 1: Write a function that outputs a student with their grades, where a
// student should be output with first name, last name, age, and a list of grades.

function outputStudentInformation (student:Student): void {
    console.log(`${student.firstName} ${student.lastName} (${student.age})`);
    console.log("=".repeat(30));
    //console.log(`Noten: ${student.grades.join(",")}`);
    //Step 3: Allow undefined as a value (displayed as *) Task:
    const formattedGrades = student.grades.map(grade => grade !== undefined ? grade : '*');
    console.log(`Noten: ${formattedGrades.join(",")}`);
    console.log();

}

// Step 4: Print a list of all students in the console Task:Write a function that prints a list of all students in the console.
const printAllStudents = (students: Student[]): void => {
    students.forEach(outputStudentInformation);
}

// Create an array of students
const students: Student[] = [
    {
        firstName: "Anton",
        lastName: "Meier",
        age: 16,
        grades: [1, 4, 3, 1, "A", undefined, 1, 2]
    },
    {
        firstName: "Berta",
        lastName: "Müller",
        age: 17,
        grades: ["A", undefined, 1]
    },
    {
        firstName: "Cäsar",
        lastName: "Schmidt",
        age: 17,
        grades: ["A", 1, undefined, 3, 2, 4, 5]
    }
];

// Call the function
printAllStudents(students);


