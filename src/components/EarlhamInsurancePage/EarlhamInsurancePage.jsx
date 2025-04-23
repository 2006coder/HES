import React from 'react';
import '../EarlhamInsurancePage/EarlhamInsurancePageStyle.css'; 


const EarlhamInsurance = () => {
    return (
        <section id="earlham-insurance">
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
                <h1>Earlham-Aetna Student Health Insurance Guide</h1>
                
                <div className='get-insurance-id'>
                    <h2>Use your plan with confidence during the 2024-2025 school year.</h2>
                    <h3>Coverage period: <span>August 1, 2024 - July 31, 2025</span><br></br>
                        Plan type: PPO (Preferred Provider Organization) <br></br>
                        <span>View or download your insurance ID card:
                        <a href="https://www.aetnastudenthealth.com/en/school/686203/members/get-id-card.html" target="_blank" rel="noopener noreferrer"> Click Here</a></span></h3>
                </div>

                <div className='how-to-use-student-insurance'>
                    <h2>How to Use Your Student Health Insurance Plan</h2>
                        <ol>
                            <div>
                            <li>
                            <h3>Know what your plan covers.</h3>
                            <p>Avoid surprise costs by understanding key benefits and limitations.</p>
                            </li>
                            <li>
                            <h3>Always bring your insurance card</h3>
                            <p>Save a photo and carry a physical copy.</p>
                            </li>
                            <li>
                            <h3>Choose in-network care.</h3>
                            <p>Click <a href="http://www.aetna.com/docfind" target="_blank" rel="noopener noreferrer"> here</a> to search for providers.</p>
                            </li>
                            </div>

                            <li>
                            <h3>Understand how claims work.</h3>
                                <ul>
                                    <li>In-network: the provider bills Aetna directly</li>
                                    <li>Out-of-network: you may need to pay upfront and file a claim. Include itemized bills with your name, ID#, and Earlham College.</li>
                                </ul>
                            </li>
                            <li>
                            <h3>Watch for your Explanation of Benefits (EOB).</h3>
                            <p>It will show what was paid and whether you owe anything.</p>
                            </li>
                            <li>
                            <h3>Questions? Contact Aetna Student Health or call 1-877-626-2308.</h3>
                            </li>
                        </ol>
                </div>

                <div className='referral'>
                    <h2>Do I Need a Referral?</h2>
                    <p>No referral is needed to see a specialist with the Earlham Aetna plan. 
                        <br></br>You can schedule appointments directly with dermatologists, therapists, or any specialist without going through your primary care provider.</p>
                </div>


                <h2>Key Plan Benefits at a Glance (With Examples)</h2>
                <table>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">In-Network</th>
                            <th scope="col">Out-of-Network</th>
                            <th scope="col">Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Annual Deductible</th>
                            <td data-label="content" class="in-network"><span>$300</span></td>
                            <td data-label="content" class="out-network"><span>$300</span></td>
                            <td data-label="content" class="example"><span>You pay the first $300 for services before coverage begins.</span></td>
                        </tr>
                        <tr>
                        <th>Out-of-Pocket Max</th>
                            <td data-label="content" class="in-network"><span>$7,900</span></td>
                            <td data-label="content" class="out-network"><span>$7,900</span></td>
                            <td data-label="content" class="example"><span>After this, Aetna covers all approved services.</span></td>
                        </tr>
                        <tr>
                        <th>Primary Care Visit</th>
                            <td data-label="content" class="in-network"><span>20% coinsurance</span></td>
                            <td data-label="content" class="out-network"><span>40% coinsurance</span></td>
                            <td data-label="content" class="example"><span>A $100 visit = $20 in-network, $40 out-of-network.</span></td>
                        </tr>
                        <tr>
                        <th>Specialist Visit</th>
                            <td data-label="content" class="in-network"><span>20% coinsurance</span></td>
                            <td data-label="content" class="out-network"><span>40% coinsurance</span></td>
                            <td data-label="content" class="example"><span>Dermatology visit costing $200 = $40 in-network.</span></td>
                        </tr><tr>
                        <th>Urgent Care</th>
                            <td data-label="content" class="in-network"><span>20% coinsurance</span></td>
                            <td data-label="content" class="out-network"><span>40% coinsurance</span></td>
                            <td data-label="content" class="example"><span>Weekend earache visit = $30 in-network for $150 bill.</span></td>
                        </tr><tr>
                        <th>Mental Health (Outpatient)</th>
                            <td data-label="content" class="in-network"><span>20% coinsurance</span></td>
                            <td data-label="content" class="out-network"><span>40% coinsurance</span></td>
                            <td data-label="content" class="example"><span>$150 session = $30 in-network.</span></td>
                        </tr><tr>
                        <th>Emergency Room</th>
                            <td data-label="content" class="in-network"><span>20% after $100 copay</span></td>
                            <td data-label="content" class="out-network"><span>Same</span></td>
                            <td data-label="content" class="example"><span>ER visit with food poisoning = copay + 20%.</span></td>
                        </tr><tr>
                        <th>Generic Drugs</th>
                            <td data-label="content" class="in-network"><span>$30 (retail), $90 (mail)</span></td>
                            <td data-label="content" class="out-network"><span>Same</span></td>
                            <td data-label="content" class="example"><span>Antibiotics cost $30 retail, no deductible.</span></td>
                        </tr><tr>
                        <th>Preferred Brand Drugs</th>
                            <td data-label="content" class="in-network"><span>$60 (retail), $180 (mail)</span></td>
                            <td data-label="content" class="out-network"><span>Same</span></td>
                            <td data-label="content" class="example"><span>Inhaler = $60 at pharmacy.</span></td>
                        </tr><tr>
                        <th>Non-Preferred Brand Drugs</th>
                            <td data-label="content" class="in-network"><span>$85 (retail), $255 (mail)</span></td>
                            <td data-label="content" class="out-network"><span>Same</span></td>
                            <td data-label="content" class="example"><span>Less common medication = $85 retail.</span></td>
                        </tr>
                    </tbody>
                </table>  

                <div className='where-to-go'>
                    <h2>Where Should You Go?</h2>
                    <p>Knowing where to go saves time and money. <br></br>Here's a quick guide:</p>
                    <table>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Out-of-Network</th>
                            <th scope="col">Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Minor symptoms (cold, allergies)</th>
                            <td data-label="content" class="where-to-go-column"><span>Go to Earlham Health Services or an on-campus athletic trainer</span></td>
                            <td data-label="content" class="cost"><span>Free or low cost</span></td>
                        </tr>
                        <tr>
                            <th>Moderate symptoms (fever, infection, sprains):</th>
                            <td data-label="content" class="where-to-go-column"><span>Visit an Urgent Care center</span></td>
                            <td data-label="content" class="cost"><span>Cost: 20% in-network coinsurance (approx. $20-40)</span></td>
                        </tr>
                        <tr>
                            <th>Serious symptoms (major illness or injury):</th>
                            <td data-label="content" class="where-to-go-column"><span>Go to the Emergency Room (ER).</span></td>
                            <td data-label="content" class="cost"><span>20% coinsurance after $100 copay</span></td>
                        </tr>
                        <tr>
                            <th>Mental Health concerns</th>
                            <td data-label="content" class="where-to-go-column"><span>Use Earlham Counseling Services or see an in-network therapist</span></td>
                            <td data-label="content" class="cost"><span>20% coinsurance (e.g., $30 per session)</span></td>
                        </tr>
                    </tbody>
                </table>  
                </div>

                <div className='not-covered-service'>
                    <h2>Services That Are Not Covered</h2>
                    <p>The following services are generally not covered by your student health insurance plan. If you need them,
                    expect to pay full price or consider separate coverage:</p>

                    <ul>
                        <li>Acupuncture</li>
                        <li>Cosmetic surgery</li>
                        <li>Adult dental care (cleanings, fillings, etc.)</li>
                        <li>Routine eye exams and glasses for adults</li>
                        <li>Routine foot care (non-medical)</li>
                        <li>Long-term care (e.g., nursing homes)</li>
                        <li>Weight-loss programs (unless part of preventive care)</li>
                    </ul>
                </div>

            </div>
        </section>
    );
 };

 export default EarlhamInsurance;