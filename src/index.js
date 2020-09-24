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

import React from "react";
import ReactDOM from "react-dom";