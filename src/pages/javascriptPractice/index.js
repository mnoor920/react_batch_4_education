import React, { useEffect } from 'react'

const JavascriptPractice = () => {

    function add(a, b) {
        let c = a + b
        return c;
    }
    function subs(a, b) {
        return a - b;
    }
    function mul(a, b) {
        return a * b;
    }
    function Divi(a, b) {
        return a / b;
    }

    function ChekEven(x) {
        if (x % 2 == 0) {
            return 'Even Number'
        } else {
            return 'Odd Number'
        }
    }
    function hyphenSpace(s) {
        s = (s.trim) ? s.trim() : s.replace(/^\s+|\s+$/g, '');
        return s.split(/\s+/).join('-');
    }



    let person = {
        first_name: 'Muhammad',
        last_name: 'Noor',
        age: '26',
        qualification: 'MSC',
        job: 'Team Lead React JS',
        courses: [
            {
                course_name: 'Full Stack',
                course_duration: ''
            }
        ],
        refer_person: {
            firname: ''
        }
    }

    const employeList = [
        {
            first_name: 'Muhammad',
            last_name: 'Noor',
            age: '26',
            qualification: 'MSC',
            job: 'Team Lead React JS',
            courses: [
                {
                    course_name: 'Full Stack',
                    course_duration: ''
                }
            ],
            refer_person: {
                firname: ''
            }
        },
        {
            first_name: 'Muhammad',
            last_name: 'Mubashir',
            age: '26',
            qualification: 'MSC',
            job: 'Team Lead React JS',
            courses: [
                {
                    course_name: 'Full Stack',
                    course_duration: ''
                }
            ],
            refer_person: {
                firname: ''
            }
        },
        {
            first_name: 'Noel',
            last_name: 'Shahbaz',
            age: '26',
            qualification: 'MSC',
            job: 'Team Lead React JS',
            courses: [
                {
                    course_name: 'Full Stack',
                    course_duration: ''
                }
            ],
            refer_person: {
                firname: ''
            }
        }
        , {
            first_name: 'Muhammad',
            last_name: 'Umar',
            age: '26',
            qualification: 'MSC',
            job: 'Team Lead React JS',
            courses: [
                {
                    course_name: 'Full Stack',
                    course_duration: ''
                }
            ],
            refer_person: {
                firname: ''
            }
        }
    ]


    const fliterEmpl = employeList.filter((item) => item?.last_name == 'Noor')

    const todo = []

    useEffect(() => {
        console.log("todo in effect", todo)
    }, [todo])
    const handelChange = () => {
        todo.push("Kiwi")
    }
    const fruits = ["Banana", "Orange", "Apple"];
    console.log("data in fruit", fruits)
    fruits.push("Kiwi");
    const greetingWord = `Well Come ${person.first_name} ${person.last_name} is The World of Programming`
    let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let length = text.length;

    const todoString = todo.toString()
    console.log("data in todo", fruits)
    return (
        <div>
            <p>
                {add(10, 20)}
            </p>
            <p>
                {subs(-2000, -3000)}
            </p>
            <p>
                {mul(-2000, -3000)}
            </p>
            <p>
                {Divi(9000, 0)}
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, praesentium!
                {ChekEven((add(899, 9000) - subs(-900000, -899999)))}
            </p>
            <p>
                {hyphenSpace('Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, praesentium!')}
            </p>

            <p>Person Information</p>
            <ul>
                <li>First Name : {person.first_name} </li>
                <li>Last Name : {person.last_name} </li>
                <li>Age : {person.age} </li>
                <li>Qualification : {person.qualification} </li>

                <li> {person.qualification + 'Is' + person.age}  </li>
                <li> Well Come Muhammad Noor is The World of Programming  </li>
                <li> {greetingWord}  </li>
                <li> {length}  </li>
                <li> {greetingWord.at(6)}  </li>
                <li> {greetingWord.charAt(6)}  </li>
                <li> {greetingWord.charCodeAt(6)}  </li>
                <li> {greetingWord.slice(0, 15)}  </li>

                <li>
                    {todo.toString()}
                </li>
                <button onClick={handelChange}>Add</button>

                <h2>Employe Name</h2>
                {fliterEmpl.map((item, index) => {
                    return (
                        <li key={index}>
                            {item.first_name} {item.last_name} {item?.age} years {item.gender}
                        </li>
                    )
                })}

            </ul>

        </div>
    )
}

export default JavascriptPractice