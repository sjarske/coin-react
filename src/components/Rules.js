import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";


function Rules() {

    useEffect(() => {
        fetchRules();
    }, []);

    const [rules, setRules] = useState([]);

    const fetchRules = async () => {
        const data = await fetch('http://localhost:8080/api/traderules');
        const rules = await data.json();
        setRules(rules);
    }

    return (
        <div>
            <div className='divleft'>
                <h1>Rules</h1>
                <div>
                    {rules.map(rule => (
                        <div className='border-div'>
                            <div>
                                <h3>"{rule.name}"</h3>
                            </div>
                            <div>
                                <h3>If {rule.coinName} has {rule.coinIndicator} {rule.coinCondition} {rule.ifPercentage}% </h3>
                            </div>
                            <div>
                                <h3>Then {rule.marketAction} {rule.thenPercentage}% for USDT</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='divright'>
                <Link to='/createrules'>
                    <button className="button">Create rule</button>
                </Link>
            </div>
        </div>
    );
}

export default Rules