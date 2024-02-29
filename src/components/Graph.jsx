import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/graph.css';

function Graph({ data }) {

    return (
        <section className="graph-container">
            <h1 className="graph-title">Evolution de l'empreinte carbone des branches d'activité</h1>
            <ResponsiveContainer width="80%" height={350}>
            <LineChart
            data={data}
            className="graph"
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" tick={{ fontSize: 12, fill : '#191558', angle: -45, textAnchor: 'end'}} />
            <YAxis dataKey="value" tick={{ fontSize: 12, fill: '#191558', textAnchor: 'end'}} />
            <Tooltip />
            <Line type="monotone" stroke="#fbd999" dataKey="value" strokeWidth={2} />
            </LineChart>

            </ResponsiveContainer>
            <div className="graph-note">
                <p className="graph-description">
                Note : Tendance pour toutes les activités. Les objectifs définis pour l'indicateur d'intensité d'émission de gaz à effet de serre se basent sur les budgets carbone sectoriels de la Stratégie Nationale Bas Carbone (SNBC).
                </p>
                <p className="graph-description">
                Source : Insee, Eurostat, Banque Mondiale - Traitement La Société Nouvelle (Historique), SNCB - Traitement La Société Nouvelle (Objectif)
                </p>
            </div>
        </section>
    );
}

export default Graph;