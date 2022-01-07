import { Button } from "@mui/material";
import MontaGrid from "../../../Components/Grid/viewGrid";

interface iGridProduto {
	infos: string;
}

const GridProduto: React.FC<iGridProduto> = ({ infos}) => {

	let elementosGrid = ['detalhe','codigo','descricao', 'quantidade', 'unidade','grupo', 'subgrupo'];

	let colunasGrid = [
		{
			id: 0,
			label: 'Detalhe',
			ordenavel: false,
			filtravel: false,
			
            
		},
		{
			id: 1,
			label: 'Código',
			tipo: 'C',
			precisao: 0,
			ordenavel: false,
			filtravel: false
		},
		{
			id: 2,
			label: 'Descrição',
			tipo: 'C',
			precisao: 0,
			ordenavel: false,
			filtravel: true
		}, {
			id: 3,
			label: 'Quantidade',
			tipo: 'C',
			precisao: 0,
			ordenavel: false,
			filtravel: false
        }, {
			id: 4,
			label: 'Unidade',
			tipo: 'C',
			precisao: 0,
			ordenavel: false,
			filtravel: false
		}, {
			id: 5,
			label: 'Grupo',
			tipo: 'C',
			precisao: 0,
			ordenavel: false,
			filtravel: false
		}, {
			id: 6,
			label: 'SubGrupo',
			tipo: 'C',
			precisao: 0,
			ordenavel: false,
			filtravel: false
		}
	]

	let dataGrid = [{
		dados: infos,
		elementosGrid: elementosGrid,
		colunasGrid: colunasGrid,
		idHtml: "Grid"
	}];

    

	return (
		<div>
			<div className="centralize">
				<MontaGrid data={dataGrid} />
			</div>
		</div>
	);
}

export default GridProduto;