
import './App.css';
import  FirstComp  from './FirstComp';
import SecondComp from './SecondComp';
import ThirdComp from './ThirdComp';
import FourthComp from './FourthComp';
import FifthComp from './FifthComp';

function App() {
  return (
    <div >
        <FirstComp str={'First Component'} 
        num={1}
        obj={{name:"Ann", age:23}}
        arr={[1,2,3]} 
        func={function sum(a, b) {
              return a + b;}}
        bool={false}
/>

    <SecondComp str={'Second Component'} 
     num={2}
     obj={{name:"Oleg", age:24}}
     arr={[1,2,3]} 
     func={function sum(a, b) {
           return a + b;}}
     bool={true}/>
     <ThirdComp str={'Third Component'} 
     num={3}
     obj={{name:"Max", age:25}}
     arr={[1,2,3]} 
     func={function sum(a, b) {
           return a + b;}}
     bool={false}/>
     <FourthComp str={'Fourth Component'} 
     num={4}
     obj={{name:"Pavel", age:26}}
     arr={[1,2,3]} 
     func={function sum(a, b) {
           return a + b;}}
     bool={false}/>
      <FifthComp str={'Fifth Component'} 
     num={5}
     obj={{name:"Tanya", age:27}}
     arr={[1,2,3]} 
     func={function sum(a, b) {
           return a + b;}}
     bool={false}/>
</div>
  );
}

export default App;
