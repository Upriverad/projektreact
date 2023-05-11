{/*Wszystkie komponenty jakie ustalimy, w tym przypadku lewa część tabeli dodawania i prawa część tabeli dodawania są obrazowane
jako funkcje, które nam coś zwracają co pokaże nam się na stronie */}

{/*Budujemy funkcje ktora będzie nasza lewa czescia tabeli*/}

{/*Jak chcemy cokolwiek zwrócić na ekran to dajemy return*/}

{/*placeholder daje taki znikający po kliknięciu w input napis poglądowy*/}

/*importujemy useState, który jakby "rerenderuje" nam na nowo element dany*/
import { useState } from "react";


function AddStudentsForm(props) {

    /*to działa w ten sposób że nadajemy stałe, w których podajemy dla przykładu z name: name to nazwa zmiennej przechowującej to co
    napiszemy w inpucie, setName służy do zmieniania name i możemy to zmieniać właśnie dzięki zaimportowaniu tego useState pozwalającego
    "rerenderować" elementy. UseState domyślnie ustawiamy jako pusty*/  
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [grade, setGrade] = useState("");
    /*Dzięki temu mamy teraz stworzone miejsca do których będą zapisywane nasze dane z inputów podawane przez użytkownika*/

    function nameHandler(event) {
        {/*Za każdym kliknięciem bierzemy po jednej literce i dopisujemy do zmiennej name*/}
        setName(event.target.value);
        
    }
    function surnameHandler(event) {
        setSurname(event.target.value);
    }
    function gradeHandler(event) {
        setGrade(event.target.value);

    }
    /*tak dla zapamiętania, to jak coś taka funkcję można też zapisać jako arrow function w taki sposób: */
    const ClickHandler = () => {
        console.log("siema");  
    };

    /*co to robi? po kliknięciu przycisku button odpala się funkcja onSubmit do której jest przypisana funkcja submitFormHandler. Dzięki
    temu wszystko co zebraliśmy z inputów wrzucamy do jednej const StudentsData*/ 

    function submitFormHandler(event) {

        /*to daje znak przeglądarce że po wysłaniu formularza nie ma ona przeładować okna witryny. Dzięki temu będziemy mogli 
        zapisać dane wpisane przez użytkownika"*/
        event.preventDefault();

        /*chcemy przekazać to do StudentsGrade, ale musimy to zrobić poprzez przekazanie do App i dopiero potem do StudentsGrade*/
        const StudentsData = {
            /*po lewej nazwa tego co przechowujemy, po prawej wartość tego co chcemy przechować*/
            studentsName: name, 
            studentsSurname: surname, 
            studentsGrade: grade,
            id: Math.floor(Math.random() * 1000),
        };  
        
        /*wywołujemy studentsDataFromChild jako funkcję i jej argument to StudentsData (patrz powyżej). W ten sposób przekazujemy te informacje
        o wpisanych przez użytkownika w inputy danych i przekazujemy je do rodzica. */

        //musi być props bo inaczej nie zadziała
        props.studentsDataFromChild(StudentsData);
        //po zrobieniu tego StudentsData przekazuje się do App.jsx jako "data" będące argumentem dla studentsDataFromChild, to przekazuje się
        //setData również z argumentem "data"

        console.log(StudentsData);
        /*czyści nam pole po kliknięciu buttona i dodaniu danych do const StudentsData */
        setName("")
        setSurname("")
        setGrade("")

    }

    /*z uwagi na to, że jest tu form to jeśli damy tu event onSubmit on niejako rozumie że kliknięcie buttona wywołuje event onSubmit i 
    zatwierdza się formularz*/
    return <form onSubmit={submitFormHandler}>

        {/* Dlaczego dla event onCLick przy pisaniu funkcji ClickHandler do której się odnosi nie musimy podawać jako atrybut event?
        Ponieważ tutaj nic się nie będzie zmieniać w wartościach odnoszących się do funkcji. W przypadku np. nameHandler zmienia się
        value zależnie od akcji podejmowanych przez użytkownika. Dlatego tam jako atrybut podajemy event, żeby było to zrozumiałe dla 
        programu, że dla tej funkcji mogą zmieniać się elementy, które jej podajemy*/}
        <label onClick={ClickHandler}>Add Student</label>
        
        {/*Jak chce sie zbierac inputy to korzystamy zawsze z atrybutow onChange i value. Dla onchange dajemy funkcje nameHandler, która
        to bierze event. Value natomiast jest od const name. Analogicznie dla kolejnych inputów
    
        TAK SIĘ ROBI ZAWSZE DLA INPUTÓW*/}

        {/*Czyli onChange jest tu naszym eventem i np. surnameHandler to tylko nazwa funkcji do której się odnosimy i którą chcemy
        na dany event wywołać*/}

        {/* Czyli co my tu robimy? Mówimy inputowi co ma zrobić po zmianie. Czyli w momencie gdy będzie zmiana inputu odpal
        funkcje nameHandler i wykonaj to co jest wewnątrz tej funkcji */}

        {/* required znaczy tyle że pole musi być wypełnione */}
        <input onChange={nameHandler} value={name} type="text" placeholder="Name" required></input>
        <input onChange={surnameHandler} value={surname} type="text" placeholder="Surname" required></input>
        <input onChange={gradeHandler} value={grade} type="text" placeholder="Grades" required></input>
        <button type="submit" >Add</button>
    </form>;
}

export default AddStudentsForm;