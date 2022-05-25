import React, { useState, useEffect } from "react";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Sales By Month for:',
        },
    },
};

const Grafico = () => {
    const [categoria, setCategoria] = useState([]);
    const [producto, setProducto] = useState([]);
    const [marca, setMarca] = useState([]);
    const baseUrl = 'http://localhost:3001/grafico';
    const [showMarca, setShowMarca] = useState(false)
    const [num, setNum] = useState([0.0,0.0,0.0,0.0, 0.0]);
    const cate = async () => {
        const res = await fetch(baseUrl);
        const datos = await res.json();
        setCategoria(datos);
    }

    useEffect(() => {
        cate();
    }, []);
    
    const labels = ['January', 'February', 'March', 'April'];

    let data = {
        labels,
        datasets: [
            {
                label: 'Ventas',
                data: num,
                backgroundColor: '#49b1c9',
            }
        ],
    };
    
    const handleChange = async (e) => {
        let { name, value } = e.target;
        if (name === 'categoria' && value != 0) {
            const url = `http://localhost:3001/grafico/${value}`;
            const res = await fetch(url);
            const data = await res.json();
            setProducto(data);
            setShowMarca(false);
            setNum([0,0]);
        }
        if (name === 'producto' && value != 0) {
            const url = `http://localhost:3001/marca/${value}`;
            const res = await fetch(url);
            const data = await res.json();
            setMarca(data);
            setShowMarca(true);
            setNum([0,0]);
        }
        if(name === 'marca' && value != 0){
            const url = `http://localhost:3001/marca/${value}`;
            const res = await fetch(url);
            const data = await res.json();
            const label = ['January', 'February', 'March', 'April'];
            setNum(label.map(() => Math.floor((Math.random() * (1000 - 200 + 1)) + 200)));
        }
    }

    return (
        <div>
            <div class="container py-4">
                <div class="row">
                    <div className="col-md-4">
                        <label className="px-2">Categoria: </label>
                        <select name="categoria" onChange={handleChange}>
                            <option value="0">--seleccione--</option>
                            {categoria.map((i) => {
                                return (<option value={i.id}>{i.name}</option>)
                            })}

                        </select>
                    </div>
                    <div className="col-md-4">
                        <label className="px-2">Producto: </label>
                        <select name="producto" onChange={handleChange} aria-label=".form-select-sm example">
                            <option value="0">--seleccione--</option>
                            {producto.map((i) => {
                                return (<option value={i.id}>{i.name}</option>)
                            })}
                        </select>
                    </div>
                    <div class="col-md-4" hidden={!showMarca}>
                        <label className="px-2">Marca: </label>
                        <select name="marca" onChange={handleChange} aria-label=".form-select-sm example">
                            <option value="0">--seleccione--</option>
                            {marca.map((i) => {
                                return (<option value={i.id}>{i.name}</option>)
                            })}
                        </select>
                    </div>
                </div>
            </div>

            <Bar options={options} data={data} />
        </div >
    )
};

export default Grafico;

