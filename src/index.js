// import React from "react";
// import ReactDOM from "react-dom";

// function DagensProgram(props) {
//     return (
//         <div>
//             <h1>{props.today}</h1>
//             <ol>
//                 <li>Repetition TS</li>
//                 <li>React introduktion</li>
//                 <ul>
//                     <li>Vad?</li>
//                     <li>Varför?</li>
//                     <li>Hur? (JSX)</li>
//                     <li>API/Objekt</li>
//                     <li>Komponenter</li>
//                     <li>Props</li>
//                     <li>State</li>
//                 </ul>
//                 <li>React listor & formulär</li>
//                 <li>React Komponenter i Komponenter</li>
//             </ol>
//         </div>
//     );
// }

// class TodaysProgram extends React.Component {
//     constructor(props) {
//         super();
//         // Wrap html-expression in fragment (empty HTML-tag)
//         this.state = {
//             agenda: (
//                 <>
//                     <li>Repetition TS</li>
//                     <li>React introduktion</li>
//                     <ul>
//                         <li>Vad?</li>
//                         <li>Varför?</li>
//                         <li>Hur? (JSX)</li>
//                         <li>API/Objekt</li>
//                         <li>Komponenter</li>
//                         <li>Props</li>
//                         <li>State</li>
//                     </ul>
//                     <li>React listor & formulär</li>
//                     <li>React Komponenter i Komponenter</li>
//                 </>
//             ),
//         };
//     }

//     render() {
//         return (
//             <div>
//                 <h1>{this.props.today}</h1>
//                 <ol>{this.state.agenda}</ol>
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <div>
//         <DagensProgram today="24 september" />,
//         <TodaysProgram today="24th of september" />
//     </div>,
//     document.getElementById("root")
// );


//-------------------------------------------------------------------------


// import React from "react";
// import ReactDOM from "react-dom";

// class Clicker extends React.Component {
//     constructor(props) {
//         super();
//         this.state = {
//             counterValue: 1,
//         };
//         this.doubleValue = this.doubleValue.bind(this);
//     }

//     doubleValue() {
//         this.setState({
//             counterValue: this.state.counterValue * 2,
//         });
//     }

//     setRandomValue() {
//         this.setState({
//             counterValue: Math.floor(Math.random() * 10),
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <p>Värde: {this.state.counterValue}</p>
//                 <button onClick={this.doubleValue}>Dubbla</button>
//                 <button onClick={() => this.setRandomValue()}>Slumpa</button>
//             </div>
//         );
//     }
// }

// ReactDOM.render(
//     <div>
//         <Clicker />
//     </div>,
//     document.getElementById("root")
// );

//-------------------------------------------------------------------


// import React from "react";
// import ReactDOM from "react-dom";

// class Citylister extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             sweCities: ["Stockholm", "Göteborg", "Lund", "Växjö", "Härnösand"],
//         };

//     }

//     handleSubmit(event) {
//         event.preventDefault();
//         /* Att direkt modifiera en array går inte i React, 
//         därför kan man lösa det så här */

//         // Create a new array based on current state:
//         let sweCities = [...this.state.sweCities];

//         // Add item to it
//         sweCities.push(event.target.newcity.value);

//         // Set state
//         this.setState({ sweCities });
//     }

//     render() {
//         return (
//             <div>
//                 <ul>
//                     {this.state.sweCities.map((city) => (
//                         <li>{city}</li>
//                     ))}
//                 </ul>

//                 <form onSubmit={(e) => this.handleSubmit(e)}>
//                     <input name="newcity" type="text" />
//                     <input type="submit" value="Lägg till stad" />
//                 </form>
//             </div>
//         );
//     }
// }

// ReactDOM.render(<Citylister />, document.getElementById("root"));


//------------------------------------------------------



