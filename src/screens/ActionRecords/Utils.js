import React from "react";
import namor from "namor";
import "./index.css";

const range = len => {
    const arr = [];
    for (let i = 0; i < len; i++) {
        arr.push(i);
    }
    return arr;
};

const newPerson = () => {
    const statusChance = Math.random();
    return {
        tcNo: Math.floor(Math.random() * 99999999999),
        name: namor.generate({ words: 1, numbers: 0 }),
        lastName: namor.generate({ words: 1, numbers: 0 }),
        pulse: Math.floor(Math.random() * 150),

        status:
            statusChance > 0.66
                ? "relationship"
                : statusChance > 0.33 ? "complicated" : "single"
    };
};


export function makeData(len = 200) {
    return range(len).map(d => {
        return {
            ...newPerson(),
            children: range(10).map(newPerson)
        };
    });
}

export const Logo = () => (
    <div
        style={{
            margin: "1rem auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center"
        }}
    >

        <br />

    </div>
);

export const Tips = () => (
    <div style={{ textAlign: "center" }}>
        <em>Tip: Hold shift when sorting to multi-sort!</em>
    </div>
);
