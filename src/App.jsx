import { useState } from 'react';
import AddStudentsForm from './components/AddStudentsForm';
import StudentsGrade from './components/StudentsGrade';
import './App.css';

function App() {
  //tworzymy tablice [] bo chcemy dodawac wiecej niz jeden obiekt. Wrzucamy do tej tablicy obiekty z danymi ktore zebralem w AddStdForm
  const [data, setData] = useState([]);
   
  function getStudentsData(data) {
    //prev to zawartość która była poprzednio. Od nowa dodajemy nową rzecz za pomocą tak rozpisanego setData. ...prev oznacza że kopiujemy
    //wszysto co było wcześniej (wszystko co było wcześniej w tablicy. Czyli bierzemy wszystko co było wcześniej w tablicy (prev) i 
    //kopiujemy to za pomocą ...prev i na końcu tej tablicy doklejamy nowy obiekt, czyli data. W ten sposób za każdym razem dopisujemy
    //do tej tablicy nowe rzeczy. Czyli zastępujemy starą tablicę nową tablicą. I przekazujemy to do dziecka StudentsGrade (patrz niżej)
    setData((prev) => [...prev, data]);
  }

  console.log(data);
  //Czyli tak:
  // 1. w AddStudentsForm props.studentsDataObj(StudentsData); przekazuje dane do 
  // <AddStudentsForm studentsDataObj={(data) => getStudentsData(data)} />
  // 2. tutaj te dane trafiają do funkcji geStudentsData
  // 3. w tej funkcji (która jest powyżej) za pomocą setData przekazujemy dane do useState 


  return (
    <>
    {/*Ten div reprezentuje nam cały box, który składa się z tej lewej strony i prawej na ktore je podzielilismy jako komponenty*/}
      <div className="container">
        {/*studentsDataObj to właściwość jaką nadajemy komponentowi AddStudentsForm. Dzięki tej właściwości możemy połączyć
        się studentsDataHandler i coś zrobić*/}
        <AddStudentsForm 
          studentsDataFromChild={(data) => getStudentsData(data)} 
        />
        {/*<AddStudentsForm studentsDataObj={(data) => setData(data)}     można też zrobić tak w krótszy sposób/>
        alternatywny sposób zapisu
        W środku nawiasów klamrowych mamy anonimową funkcję w której odebrany jako data obiekt zapisujemy do useStatu data*/}
        {/* studentsDataObj to takie property jak value czy onChange z AddStudentsForm */}
        {/*Napisałem to już w AddStudentsForm, ale żeby było to dla mnie jasne pisze jeszcze raz tu
        props.studentsDataObj(StudentsData); sprawia, że dane są przekazywane tutaj jako atrybut data, co później jest przekazywane jako
        atrybut data do setData. W ten sposób możemy te dane przekazać od dzidecka AddStudentsForm do rodzica App.jsx i znowu do dziecka
        StudentsGrade
        */}
        <StudentsGrade studentsDataToChild={data} /> 
        {/*Przekazaliśmy tutaj dane (naszą tablicę) żeby móc działać na komponencie StudentsGrade z danymi z AddStudentsForm*/}
      </div>
    </>
  );
}

export default App;
