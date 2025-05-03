import React from 'react';
import '../InsuranceGeneralPage/InsuranceGeneralPageStyle.css'; 


const InsuranceGeneral = () => {
    return (
        <section id="insurance-general">
            <div className='side-menu-bar'>
            <h1>MENU</h1>
              <ul className='side-menu-list'>
                <li className='side-menu-item'><a href="/when-and-where" className="btn"> WHEN to go </a></li>
                <li className='side-menu-item'><a href="/insurance-general" className="btn">Insurance General</a></li>
                <li className='side-menu-item'><a href="/earlham-insurance" className="btn"> Earlham Insurance</a></li>
                <li className='side-menu-item side-menu-item-last'><a href="/coming-soon" className="btn">Tell Us What You Want To Learn!!</a></li>
              </ul>
          </div>
            <div className='main-part'>
                <h1>HES Educational Services: Mastering U.S. Health Insurance</h1>

                        <ol>
                            <li className='section-number'>
                            <h3>What Is Health Insurance and Why Does It Matter?</h3>
                            <p>Health insurance is a safety net that helps pay for your medical care. Without it, even a simple doctor's visit or emergency room visit can cost hundreds or thousands of dollars.
                                Think of it like this:
                                You pay a little every month (premium) to avoid paying a LOT if something happens.</p>

                                <ul className='common-college-scenarios'>
                                    <li>You catch the flu and need meds - <span>Covered</span></li>
                                    <li>You sprain your ankle during practice - <span>Covered</span></li>
                                    <li>You need mental health counseling - <span> Often covered</span></li>
                                    <li>You go to the ER for food poisoning - <span>Covered, but $$$ if not in-network</span></li>
                                </ul>
                            </li>

                            <li className='section-number'>
                            <h3>Key Health Insurance Terms</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <td></td>
                                        <th scope="col"> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Premium</th>
                                        <td data-label="content" class="txt"><span>Monthly payment to have insurance</span></td>
                                    </tr>
                                    <tr>
                                        <th>Deductible</th>
                                        <td data-label="content" class="txt">What you must pay before insurance kicks in</td>
                                    </tr>
                                    <tr>
                                        <th>Co-pay</th>
                                        <td data-label="content" class="txt">Flat fee for a service</td>
                                    </tr>
                                    <tr>
                                        <th>Co-insurance</th>
                                        <td data-label="content" class="txt">Percentage you pay after the deductible</td>
                                    </tr>
                                    <tr>
                                        <th>Out-of-pocket maximum</th>
                                        <td data-label="content" class="txt">The most you'll ever pay in a year</td>
                                    </tr>
                                    <tr>
                                        <th>In-network provider</th>
                                        <td data-label="content" class="txt">Doctor/hospital that works with your insurance</td>
                                    </tr>
                                    <tr>
                                        <th>Out-of-network provider</th>
                                        <td data-label="content" class="txt">Doctor/hospital that is not covered by your insurance</td>
                                    </tr>
                                </tbody>
                            </table>   
                            <p>Pro Tip: Always make sure to know which doctors are "in-network" to avoid expensive bills</p>

                            </li>
                            
                            <li className='section-number'>
                            <h3>How to Actually Use Your Insurance</h3>
                            <h4>Step-by-step:</h4>
                            <ol>
                                <li>Know what insurance plan you have.
                                    <ul>
                                        <li>Check your insurance provider's welcome materials or log into your insurance portal</li>
                                        <li>Save a digital or physical copy of your insurance card.</li>
                                    </ul>
                                </li>
                                <li>Find care.
                                    <ul>
                                        <li>Start at your campus health center if you're unsure.</li>
                                        <li>Use your insurer's website to find in-network providers.</li>
                                    </ul>
                                </li>
                                <li>Bring your card to the appointment
                                    <ul>
                                        <li>This allows the provider to bill your insurance.</li>
                                    </ul>
                                </li>
                                <li>Pay co-pays if required.
                                    <ul>
                                        <li>Some insurance plans waive co-pays at student clinics-check your plan.</li>
                                    </ul>
                                </li>
                                <li>Keep all receipts and paperwork.
                                    <ul>
                                        <li>Especially important if you pay out of pocket (e.g., for international plans or out-of-network care).</li>
                                    </ul>
                                </li>
                            </ol>
                            
                            <p>Avoid surprise costs by understanding key benefits and limitations.</p>
                            </li>
                            
                            <li className='section-number'>
                            <h3>Do I Need a Referral?</h3>
                            <p>It depends on your insurance plan.</p>
                                <ul>
                                    <li>Some plans, like HMOs, require a referral from your primary care provider before you can see a specialist.</li>
                                    <li>Others, like PPOs, often do not require a referral.</li>
                                </ul>
                            <p>Check your plan details or call the customer service number on your insurance card to be sure.<br></br>
                            If you're on a school-provided plan (like Earlham's), see the dedicated guide for that plan.</p>
                            </li>

                            <li className='section-number'>
                            <h3>Know Where to Go - Based on Urgency.</h3>
                            <table>
                                <thead>
                                    <tr>
                                        <td></td>
                                        <th scope="col"> </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Minor  <br></br>(cold, allergies)</th>
                                        <td data-label="content" class="txt"><span>Campus Health / Athletic Trainer</span></td>
                                        <td data-label="cost" class="txt"><span>Free / $</span></td>
                                    </tr>
                                    <tr>
                                        <th>Moderate <br></br>(fever, infection)</th>
                                        <td data-label="content" class="txt"><span>Urgent Care</span></td>
                                        <td data-label="cost" class="txt"><span>$$</span></td>
                                    </tr><tr>
                                        <th>Serious <br></br>(severe illness, major injury)</th>
                                        <td data-label="content" class="txt"><span>Emergency Room</span></td>
                                        <td data-label="cost" class="txt"><span>$$$</span></td>
                                    </tr><tr>
                                        <th>Mental Health</th>
                                        <td data-label="content" class="txt"><span>Campus Counseling or In-network therapist</span></td>
                                        <td data-label="cost" class="txt"><span>Often 20% of visit cost</span></td>
                                    </tr>
                                </tbody>
                            </table>  
                            </li>
    
                        </ol>
                </div>
        </section>
    );
 };

 export default InsuranceGeneral;