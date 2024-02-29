import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/page.css';
import Graph from '../components/Graph';
import { getAllBranch } from '../api/ApiBranch';
import { getAllAggregates } from '../api/ApiAgreggates';


function Page() {
    // Initialize state
    const [aggregates, setAggregates] = useState([]);
    const [branches, setBranches] = useState([]);
    const [selectedAggregate, setSelectedAggregate] = useState('');
    const [selectedBranch, setSelectedBranch] = useState('');
    const [graphData, setGraphData] = useState([]);

    // Fetch aggregates metadata
    async function fetchAggregates() {
        const response = await getAllAggregates();
        setAggregates(response.data);
    }
    useEffect(() => {
        fetchAggregates();
    }, []);

    // Fetch branches metadata
    async function fetchBranches() {
        const response = await getAllBranch();
        setBranches(response.data);
    }
    useEffect(() => {
        fetchBranches();
    }, []);


    // Fetch graph data
    useEffect(() => {
    if (selectedAggregate && selectedBranch) {
        axios.get(`https://api.lasocietenouvelle.org/macrodata/macro_fpt_a38?indic=GHG&branch=${selectedBranch}&aggregate=${selectedAggregate}&area=FRA&currency=CPEUR`)
        .then(response => {
            setGraphData(response.data.data);
        })
        .catch(error => {
            console.error('Error fetching graph data:', error);
        });
    }
    }, [selectedAggregate, selectedBranch]);

    // Handle aggregate change
    const handleAggregateChange = (event) => {
    setSelectedAggregate(event.target.value);
    };

    // Handle branch change
    const handleBranchChange = (event) => {
    setSelectedBranch(event.target.value);
    };


    return (
    <section className="page">
        <h1 className="page-title">Courbes d'évolution</h1>
        <div className="page-selectors">
            <select value={selectedAggregate} onChange={handleAggregateChange}>
                <option value="">Sélectionnez un agrégat</option>
                {aggregates.meta && aggregates.meta.map(aggregate => (
                    <option key={aggregate.code} value={aggregate.code}> {aggregate.label}</option>
                    ))}
            </select>
            <select value={selectedBranch} onChange={handleBranchChange}>
                <option value="">Sélectionnez une branche</option>
                {branches.meta && branches.meta.map(branch => (
                    <option key={branch.code} value={branch.code}> {branch.label}</option>
                ))}
            </select>
    </div>
        <div>
            <Graph data={graphData} />
        </div>
    </section>
    );
}

export default Page;
