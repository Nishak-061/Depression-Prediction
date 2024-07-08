import './App.css';
import {  NavLink } from "react-router-dom";
//import * as tf from '@tensorflow/tfjs';
//import { useEffect } from 'react';
//import { loadGraphModelSync } from '@tensorflow/tfjs';

function Quiz() {
  return (
    <div className="App">
      <div className="col-11 mx-auto">
      <h2 className="heading"> ----- Quiz Based Test -----</h2>
        <div className="row">
        <div className="col-md-12 pt-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
      
      <h3 className="my-4">1. Are you above 30 years of age?</h3>
      <ul className="list">
        <li>
      <input type="radio" name="one" value="q1" id="r1" />
      <label><span> No</span></label> <br/>
      
      <input type="radio" name="one" value="q1" id="r1" />
      <label><span> Yes</span></label>
      </li>
      </ul>

      <h3>2. How are feeling today?</h3>
      <ul className="list">
        <li>
      <input type="radio" name="two" value="q2" id="r2" />
      <label><span>Fine</span></label><br/>
      <input type="radio" name="two" value="q2" id="r2" />
      <label> <span>Good</span></label><br/>
      <input type="radio" name="two" value="q2" id="r2" />
      <label><span>Sad</span></label><br/>
      <input type="radio" name="two" value="q2" id="r2" />
      <label><span>Depressed</span></label><br />
      </li>
      </ul>

      <h3>3. Eating and Sleeping?</h3>
      <ul className="list">
        <li>
        <input type="radio" name="three" value="q3" id="r3" />
        <label><span>No</span></label><br/>
        <input type="radio" name="three" value="q3" id="r3" />
        <label><span>Yes</span></label><br/>
        <input type="radio" name="three" value="q3" id="r3" />
        <label><span>Maybe</span></label><br/>
        </li>
      </ul>
      <h3>4. (If sad)have you been in the same mental state for the past few days?</h3>
      <ul className="list">
        <li>
        <input type="radio" name="four" value="q4" id="r4" />
        <label><span>No</span></label><br/>
        <input type="radio" name="four" value="q4" id="r4" />
        <label><span>Yes</span></label><br/>
        <input type="radio" name="four" value="q4" id="r4" />
        <label><span>Maybe</span></label><br/>
        </li>
      </ul>
      <h3>5. Is your sadness momentarily or has it been constant for a long time?</h3>
      <ul className="list">
        <li>
        <input type="radio" name="five" value="q5" id="r5" />
        <label><span>For some time</span></label><br/>
        <input type="radio" name="five" value="q5" id="r5" />
        <label><span>Significant time</span></label><br/>
        <input type="radio" name="five" value="q5" id="r5" />
        <label><span>Not sad</span></label><br/>
        <input type="radio" name="five" value="q5" id="r5" />
        <label><span>Long time</span></label><br/>
        </li>  
      </ul> 
      <h3>6. At what time of the day are you extremely low?</h3>
      <ul className="list">
        <li>
        <input type="radio" name="six" value="q6" id="r6" />
        <label><span>Morning</span></label><br/>
        <input type="radio" name="six" value="q6" id="r6" />
        <label><span>Afternoon</span></label><br/>
        <input type="radio" name="six" value="q6" id="r6" />
        <label><span>Evening</span></label><br/>
        </li>
      </ul>
      <h3>7. Has there been a sudden and huge change in your life?</h3>
      <ul className="list">
        <li>
        <input type="radio" name="seven" value="q7" id="r7" />
        <label><span>Yes</span></label><br/>
        <input type="radio" name="seven" value="q7" id="r7" />
        <label><span>No</span></label><br/>
        <input type="radio" name="seven" value="q7" id="r7" />
        <label><span>Not sure</span></label><br/>
        </li>
      </ul>
      <h3>8.Your stress is related to which of the following areas?</h3>
      <ul className="list">
        <li>
        <input type="radio" name="eight" value="q8" id="r8" />
        <label><span>Home, Work, Personal</span></label><br/>
        <input type="radio" name="eight" value="q8" id="r8" />
        <label><span>Home, Work, Financial, Personal</span></label><br/>
        <input type="radio" name="eight" value="q8" id="r8" />
        <label><span>Work, Personal</span></label><br/>
        <input type="radio" name="eight" value="q8" id="r8" />
        <label><span>Work</span></label><br/>
        <input type="radio" name="eight" value="q8" id="r8" />
        <label><span>Financial, Personal</span></label><br/>
        <input type="radio" name="eight" value="q8" id="r8" />
        <label><span>Home, Work</span></label><br/>
        <input type="radio" name="eight" value="q8" id="r8" />
        <label><span>Home, Financial, Personal</span></label><br/>
        <input type="radio" name="eight" value="q8" id="r8" />
        <label><span>Home, Personal</span></label><br/>
        <input type="radio" name="eight" value="q8" id="r8" />
        <label><span>Work, Fianacial, Personal</span></label><br/>
        <input type="radio" name="eight" value="q8" id="r8" />
        <label><span>Home</span></label><br/>
        <input type="radio" name="eight" value="q8" id="r8" />
        <label><span>Financial</span></label><br/>
        <input type="radio" name="eight" value="q8" id="r8" />
        <label><span>Work, Financial</span></label><br/>
        <input type="radio" name="eight" value="q8" id="r8" />
        <label><span>Home, Work, Financial</span></label><br/>
        <input type="radio" name="eight" value="q8" id="r8" />
        <label><span>Home, Financial</span></label><br/>
        <input type="radio" name="eight" value="q8" id="r8" />
        <label><span>Personal, None</span></label><br/>
        <input type="radio" name="eight" value="q8" id="r8" />
        <label><span>Home, Work, Financial, Personal, None</span></label><br/>
        <input type="radio" name="eight" value="q8" id="r8" />
        <label><span>Home, Work, Personal, None</span></label><br/>
        <input type="radio" name="eight" value="q8" id="r8" />
        <label><span>None</span></label><br/>
        </li>
      </ul>
      <h3>9. How frequently have you had little pleasure or interest in the activities you usually enjoy?</h3>
      <ul className="list">
        <li>
        <input type="radio" name="nine" value="q9" id="r9" />
        <label><span>Very often</span></label><br/>
        <input type="radio" name="nine" value="q9" id="r9" />
        <label><span>Sometimes</span></label><br/>
        <input type="radio" name="nine" value="q9" id="r9" />
        <label><span>Never</span></label><br/>
        <input type="radio" name="nine" value="q9" id="r9" />
        <label><span>Often</span></label><br/>
        </li>
      </ul>
      <h3>10. Describe how ‘supported’ you feel by others around you – your friends, family, or otherwise.</h3>
      <ul className="list">
        <li>
        <input type="radio" name="ten" value="q10" id="r10" />
        <label><span>Highly supportive</span></label><br/>
        <input type="radio" name="ten" value="q10" id="r10" />
        <label><span>Little bit</span></label><br/>
        <input type="radio" name="ten" value="q10" id="r10" />
        <label><span>Satisfactory</span></label><br/>
        <input type="radio" name="ten" value="q10" id="r10" />
        <label><span>Not at all</span></label><br/>
        </li>
      </ul>
      <h3>11. How frequently have you been doing things that mean something to you or your life?</h3>
      <ul className="list">
        <li>
        <input type="radio" name="eleven" value="q11" id="r11" />
        <label><span>Sometimes</span></label><br/>
        <input type="radio" name="eleven" value="q11" id="r11" />
        <label><span>Never</span></label><br/>
        <input type="radio" name="eleven" value="q11" id="r11" />
        <label><span>Often</span></label><br/>
        <input type="radio" name="eleven" value="q11" id="r11" />
        <label><span>Very often</span></label><br/>
        </li>
      </ul>
      <h3>12. If you have a mental health condition, do you feel that it interferes with your work?</h3>
      <ul className="list">
        <li>
        <input type="radio" name="twelve" value="q12" id="r12" />
        <label><span>Yes</span></label><br/>
        <input type="radio" name="twelve" value="q12" id="r12" />
        <label><span>No</span></label><br/>
        <input type="radio" name="twelve" value="q12" id="r12" />
        <label><span>Maybe</span></label><br/>
        </li>
      </ul>
      <h3>13. How easy is it for you to take medical leave for a mental health condition?</h3>
      <ul className="list">
        <li>
        <input type="radio" name="thirteen" value="q13" id="r13" />
        <label><span>Not so easy</span></label><br/>
        <input type="radio" name="thirteen" value="q13" id="r13" />
        <label><span>Very easy</span></label><br/>
        <input type="radio" name="thirteen" value="q13" id="r13" />
        <label><span>Difficult</span></label><br/>
        <input type="radio" name="thirteen" value="q13" id="r13" />
        <label><span>Easy</span></label><br/>
        </li>
      </ul>
      <h3>14. How often do you make use of substance abuse(e.g. smoking, alcohol)?</h3>
      <ul className="list">
        <li>
        <input type="radio" name="fourteen" value="q14" id="r14" />
        <label><span>Never</span></label><br/>
        <input type="radio" name="fourteen" value="q14" id="r14" />
        <label><span>Often</span></label><br/>
        <input type="radio" name="fourteen" value="q14" id="r14" />
        <label><span>Sometimes</span></label><br/>
        <input type="radio" name="fourteen" value="q14" id="r14" />
        <label><span>Very often</span></label><br/>
        </li>
      </ul>
      <h3>15. Have you taken any therapy or medication in the near past for mental health?</h3>
      <ul className="list">
        <li>
        <input type="radio" name="fifteen" value="q15" id="r15" />
        <label><span>Yes</span></label><br/>
        <input type="radio" name="fifteen" value="q15" id="r15" />
        <label><span>No</span></label><br/>
        <input type="radio" name="fifteen" value="q15" id="r15" />
        <label><span>Maybe</span></label><br/>
        </li>
      </ul>
      <h3>16. Having trouble concentrating on things, such as reading the newspaper or watching television, or studying?</h3>
      <ul className="list">
        <li>
        <input type="radio" name="sixteen" value="q16" id="r16" />
        <label><span>Yes</span></label><br/>
        <input type="radio" name="sixteen" value="q16" id="r16" />
        <label><span>No</span></label><br/>
        <input type="radio" name="sixteen" value="q16" id="r16" />
        <label><span>Maybe</span></label><br/>
        </li>
      </ul>
      <h3>17. Do you feel bad about yourself or that you are a failure or have let yourself or your family down?</h3>
      <ul className="list">
        <li>
        <input type="radio" name="seventeen" value="q17" id="r17" />
        <label><span>Yes</span></label><br/>
        <input type="radio" name="seventeen" value="q17" id="r17" />
        <label><span>No</span></label><br/>
        <input type="radio" name="seventeen" value="q17" id="r17" />
        <label><span>Maybe</span></label><br/>
        </li>
      </ul>
      <h3>18. How many hours do you spend per day on watching mobile phone, laptop, computer, television, etc.?</h3>
      <ul className="list">
        <li>
        <input type="radio" name="eighteen" value="q18" id="r18" />
        <label><span>1-2 hours</span></label><br/>
        <input type="radio" name="eighteen" value="q18" id="r18" />
        <label><span>2-5 hours</span></label><br/>
        <input type="radio" name="eighteen" value="q18" id="r18" />
        <label><span>5-10 hours</span></label><br/>
        <input type="radio" name="eighteen" value="q18" id="r18" />
        <label><span>More than 10 hours</span></label><br/>
        </li>
      </ul>
      <h3>19. Has the COVID-19 pandemic affected your mental wall being?</h3>
      <ul className="list">
        <li>
        <input type="radio" name="nineteen" value="q19" id="r19" />
        <label><span>Not</span></label><br/>
        <input type="radio" name="nineteen" value="q19" id="r19" />
        <label><span>Not sure</span></label><br/>
        </li>
      </ul>
      <h3>20. How often do you get offended or angry or start crying?</h3>
      <ul className="list">
        <li>
        <input type="radio" name="nineteen" value="q19" id="r19" />
        <label><span>Often</span></label><br/>
        <input type="radio" name="nineteen" value="q19" id="r19" />
        <label><span>Very often</span></label><br/>
        <input type="radio" name="nineteen" value="q19" id="r19" />
        <label><span>Never</span></label><br/>
        </li>
      </ul>
      <div className="mb-3">
      <NavLink to="/result" className="btn btn-danger"  >SUBMIT </NavLink>
    </div>
    </div>
    </div>
    </div>
    </div>
      
  );
}

export default Quiz;
