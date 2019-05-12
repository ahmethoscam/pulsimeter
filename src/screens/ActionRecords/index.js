import React from "react";

import { makeData, Logo, Tips } from "./Utils";
import matchSorter from "match-sorter";
import axios from "axios";
import Select from "react-select";
//import "react-select/dist/react-select.css";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import {Button, Form, Nav, Navbar} from "react-bootstrap";

export default class ActionRecords extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filtered: [],
            select2: undefined,
            doctorId:1
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onFilteredChangeCustom = (value, accessor) => {
        let filtered = this.state.filtered;
        let insertNewFilter = 1;

        if (filtered.length) {
            filtered.forEach((filter, i) => {
                if (filter["id"] === accessor) {
                    if (value === "" || !value.length) filtered.splice(i, 1);
                    else filter["value"] = value;

                    insertNewFilter = 0;
                }
            });
        }

        if (insertNewFilter) {
            filtered.push({ id: accessor, value: value });
        }

        this.setState({ filtered: filtered });
    };
    handleSubmit() {
            this.props.history.push("/signUp");
    };
    componentDidMount() {
        axios.get( '/api/unwellList/'+this.state.doctorId)
            .then( response => {
                // console.log(response);
                this.setState( { data: response.data } );
            } );
        console.log(this.state.data)
    }
    render() {
        const { data } = this.state;
        return (
            <div>
                <Navbar bg="primary" variant="dark" collapseOnSelect expand="lg">
                    <Navbar.Brand href="#home">E-Kontrol</Navbar.Brand>
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                        <Button variant="outline-light" href="/patientRecord" >Hasta Kayıt</Button>
                        <Button variant="outline-light" href="/" >Çıkış</Button>
                    </Form>
                </Navbar>
                <ReactTable
                    data={data}
                    filterable
                    filtered={this.state.filtered}
                    onFilteredChange={(filtered, column, value) => {
                        this.onFilteredChangeCustom(value, column.id || column.accessor);
                    }}
                    defaultFilterMethod={(filter, row, column) => {
                        const id = filter.pivotId || filter.id;
                        if (typeof filter.value === "object") {
                            return row[id] !== undefined
                                ? filter.value.indexOf(row[id]) > -1
                                : true;
                        } else {
                            return row[id] !== undefined
                                ? String(row[id]).indexOf(filter.value) > -1
                                : true;
                        }
                    }}
                    columns={[
                        {
                            columns: [

                                {
                                    Header: "TC Kimlik Numarası",
                                    id: "tcNo",
                                    accessor: d => d.hastaTc
                                }
                            ]
                        },
                        {
                            columns: [
                                {
                                    Header: "İsim",
                                    accessor: "hastaadi"
                                },
                                {
                                    Header: "Soyisim",
                                    id: "lastName",
                                    accessor: d => d.hastaSoyadi
                                }
                            ]
                        },
                        {
                            columns: [
                                {
                                    Header: "Nabız",
                                    accessor: "nabiz"
                                },
                                {
                                    Header: "Durum",
                                    accessor: "nabiz",
                                    id: "nabiz",
                                    Cell: ({ value }) => (value <= 130 && value >= 50 ? "Normal" : "Yüksek"),


                                }
                            ]
                        }
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                />



            </div>
        );
    }
}


