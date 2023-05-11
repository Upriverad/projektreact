{/*To jest nasz komponent do działania prawej części boxa, tzn. tej przechowującej wyniki studentów*/}

{/*Na wszelki wypadek żeby nie zapomnieć, div to taki coś co dajemy żeby wytyczyć element html, w którym chcemy coś pomajstrować, 
samo w sobie div nic nie robi*/}
function StudentsGrade(props) {
    //przekazaliśmy data za pomocą studentsDataToChild
    console.log(props.studentsDataToChild);

    return (
        <div className="StudentsGradeWrapper">
            <h1>Students</h1>
            <ul>
                {/*tutaj wskazujemy że ma coś się dziać DOPIERO WTEDY KIEDY TABLICA NIE JEST PUSTA (tzn. jej długość nie jest równa 0). 
                Gdybyśmy tego nie zrobili to mielibyśmy błąd bo początkowo tablica ta jest pusta przed dodaniem tam czegokolwiek,
                więc nie ma danych do ściągnięcia
                
                studentsDataToChild) to reprezentacja (data) czyli tablicy z obiektami*/}

                {/*map oznacza przechodzenie pętlą po tablicy w tym przypadku. Co ta pętla tu robi? Pętla idzie po tablicy z data i
                    każdy obiekt z tej tablicy zamienia na li (to poniżej). Tworzymy tyle tych list ile jest obiektow w tablicy
                
                    Metoda map co robi?
                    Idzie pętlą for po tablicy i to item to każdy kolejny obiekt tablicy. Dla każdego elementu w tablicy 
                    
                    
                    Dzięki np. item.studentsName odwołujemy się do własności studentsName
                    
                    filter to funkcja która tworzy nową tablicę*/}
                {props.studentsDataToChild.length !== 0 &&
                    props.studentsDataToChild.map((item) => (
                        <li key={item.id}>
                            {/*$ to taki odpowiednik f"str" w pythonie*/}
                            <p>{`${item.studentsName} ${item.studentsSurname}`}</p>
                            <div>{`${item.studentsGrade}`}</div>
                        </li>
                    ))}
            </ul>
        </div>  
    );
}

export default StudentsGrade;

/*StudentsGrade i AddStudentsForm to rodzeństwo i dzieci App.jsx. Nie można między nimi bezpośrednio przesłać danych, bo są na tym samym
poziomie. A my te dane z AddStudentForm pozyskane od użytkownika musimy przesłać do StudentsGrade aby je tam zapisać. Co zrobić?
Musimy zrobić zarządzanie stanem w React. Dzięki temu jesteśmy w stanie zrobić takie miejsce, gdzie można zapisywać dane wszystkich
komponentów, niezależnie od stanu ich spokrewnienia.

Analogia do Pythona: nasze komponenty to tak jakby dwie różne funkcje w Pythonie ze zmiennymi lokalnymi. Nie jesteśmy w stanie pomiędzy
nimi przesłać danych "tak o".

Chcemy zrobić tak, żeby rodzicowi dać to co zostało przekazane w formularzu i potem rodzic przekaże to do StudentsGrade.

*/