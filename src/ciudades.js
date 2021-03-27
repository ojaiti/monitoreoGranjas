const ciudades = [
    {
      value: '1',
      label: 'TPP S1',
      status: 'No libre',
      destinosConAutorizacion:['1','2', '3','4', '5', '6', '7', '8', '9', '10', '11', '12', '13','16','18','19','20', '21','22', '23', '24', '25', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['14', '15', '17', '26', '38'],
      noches: ['-','3','3','3','3','0','0','0','0','0','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','3','3','3','0','0','0','0','0']
    },
    {
      value: '2',
      label: 'XARATANGA 1',
      status: 'No libre',
      destinosConAutorizacion:[ '6', '7', '8', '9', '10', '11', '12', '13', '14','15','16','17','18','19','20', '21','22', '23', '24', '25', '26', '27', '28', '29','30', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: [  '1', '3','4', '5'],
      noches: ['3','-','3','3','3','2','2','2','2','2','0','0','2','2','2','2','2','2','2','2','2','2','2','2','2','2','0','0','0','0','3','3','0','0','0','0','0']
    },
    {
      value: '3',
      label: 'CTG XARATANGA',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['19', '23'],
      noches: ['3','0','-','3','3','2','2','2','2','2','1','1','2','2','2','2','2','2','2','2','2','2','2','2','2','2','1','1','1','0','3','3','0','0','0','0','0']
    },
    {
      value: '4',
      label: 'PORCINA 3 ',
      status: 'No libre',
      destinosConAutorizacion:[ '2', '3','4', '5', '6', '7', '8', '10', '12', '13','16','18','20', '21','22', '23', '24', '25', '27', '28', '29', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['1','9', '11', '14', '15', '17', '26', '31', '38'],
      noches: ['3','3','3','-','3','2','2','2','2','2','2','2','0','0','2','2','2','2','2','2','0','0','0','0','0','2','2','2','2','3','0','3','0','0','0','0','0']
    },
    {
      value: '5',
      label: 'PORCINA 4-5',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '8','9', '10', '11', '12', '13', '14','16','18','20','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['7', '21'],
      noches: ['3','3','3','3','-','2','2','2','2','2','2','2','2','2','0','0','0','0','0','0','2','2','2','2','2','2','2','2','2','3','3','0','0','0','0','0','0']
    },
    {
      value: '6',
      label: 'TPP 3.01',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '6', '7', '10', '11', '12', '13', '14','16','18','20','22', '23', '24', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['5', '8', '21', '25', '30'],
      noches: ['2','3','3','3','3','-','0','0','0','0','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','3','3','3','0','0','0','0','0']
    },
    {
      value: '7',
      label: 'TPP 3.02',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','18','20', '21','22', '23', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['16', '24', '25'],
      noches: ['2','3','3','3','3','0','-','0','0','0','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','3','3','3','0','0','0','0','0' ]
    },
    {
      value: '8',
      label: 'TPP 3.03',
      status: 'No libre',
      destinosConAutorizacion:['1', '3', '5', '6', '7', '8', '10', '11', '12', '13', '14','18','20', '21','22', '23', '24', '27', '28', '29', '33', '34', '36', '37'],
      destinosConPrevencion: ['2', '4', '25', '26', '30', '31', '32', '35'],
      noches: ['2','3','3','3','3','0','0','-','0','0','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','3','3','3','0','0','0','0','0']
    },
    {
      value: '9',
      label: 'TPP 3.04',
      status: 'Libre',
      destinosConAutorizacion:['1','2', '3','4', '5', '7', '8', '10', '11', '12', '14','16','17','21','22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['6', '13', '18', '20'],
      noches: ['2','3','3','3','3','0','0','0','-','0','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','3','3','3','0','0','0','0','0']
    },
    {
      value: '10',
      label: 'TPP 3.05',
      status: 'No libre',
      destinosConAutorizacion:['1', '2', '3', '5', '6', '7', '8', '10', '11', '12', '13','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['1', '4', '14', '15', '17'],
      noches: ['2','3','3','3','3','0','0','0','0','-','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','3','3','3','0','0','0','0','0']
    },
    {
      value: '11',
      label: 'XARATANGA S2',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['3','2','2','3','3','2','2','2','2','2','-','0','2','2','2','2','2','2','2','2','2','2','2','2','2','2','0','0','0','3','3','3','0','0','0','0','0']
    },
    {
      value: '12',
      label: 'XARATANGA CMG',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '11', '12', '13', '14','16','18', '21', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['10', '18', '20', '22'],
      noches: ['3','2','2','3','3','2','2','2','2','2','0','-','2','2','2','2','2','2','2','2','2','2','2','2','2','2','0','0','0','3','3','3','0','0','0','0','0']
    },
    {
      value: '13',
      label: 'SECCION 10',
      status: 'No libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['3','3','3','2','3','2','2','2','2','2','2','2','-','0','2','2','2','2','2','2','0','0','0','0','0','2','2','2','2','3','3','3','0','0','0','0','0']
    },
    {
      value: '14',
      label: 'PORCINA 9',
      status: 'No libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['3','3','3','2','3','2','2','2','2','2','2','2','0','-','2','2','2','2','2','2','0','0','0','0','0','2','2','2','2','3','3','3','0','0','0','0','0']
    },
    {
      value: '15',
      label: 'Laguna 1',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['3','3','3','3','2','2','2','2','2','2','2','2','2','2','-','0','0','0','0','0','2','2','2','2','2','2','2','2','2','3','3','3','0','0','0','0','0']
    },
    {
      value: '16',
      label: 'LAGUNA 2',
      status: 'No libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['3','3','3','3','2','2','2','2','2','2','2','2','2','2','0','-','0','0','0','0','2','2','2','2','2','2','2','2','2','3','3','3','0','0','0','0','0']
    },
    {
      value: '17',
      label: 'QUEROBABI',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['3','3','3','3','3','2','2','2','2','2','2','2','2','2','1','1','-','0','0','0','2','2','2','2','2','2','2','2','2','3','3','3','0','0','0','0','0']
    },
    {
      value: '18',
      label: 'PORCINA 6',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','17','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '19', '30'],
      noches: ['3','3','3','3','3','2','2','2','2','2','2','2','2','2','1','1','0','-','0','0','2','2','2','2','2','2','2','2','2','3','3','3','0','0','0','0','0']
    },
    {
      value: '19',
      label: 'PORCINA 1',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['3','3','3','3','3','2','2','2','2','2','2','2','2','2','1','1','0','0','-','0','2','2','2','2','2','2','2','2','2','3','3','3','0','0','0','0','0']
    },
    {
      value: '20',
      label: 'SECCION 2',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['3','3','3','3','3','2','2','2','2','2','2','2','2','2','1','1','0','0','0','-','2','2','2','2','2','2','2','2','2','3','3','3','0','0','0','0','0']
    },
    {
      value: '21',
      label: 'PORCINA 7',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['3','3','3','3','3','2','2','2','2','2','2','2','2','2','1','1','0','0','0','2','-','2','2','2','2','2','2','2','2','3','3','3','0','0','0','0','0']
    },
    {
      value: '22',
      label: 'LUIS EMILIO',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['3','3','3','3','3','2','2','2','2','2','2','2','1','1','2','2','2','2','2','2','0','-','0','0','0','2','2','2','2','3','3','3','0','0','0','0','0']
    },
    {
      value: '23',
      label: 'MARIA EMMA',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['3','3','3','3','3','2','2','2','2','2','2','2','1','1','2','2','2','2','2','2','0','0','-','0','0','2','2','2','2','3','3','3','0','0','0','0','0']
    },
    {
      value: '24',
      label: 'LUDI',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: [ '3','3','3','3','3','2','2','2','2','2','2','2','1','1','2','2','2','2','2','2','0','0','0','-','0','2','2','2','2','3','3','3','0','0','0','0','0']
    },
    {
      value: '25',
      label: 'PORCINA 10',
      status: 'No Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['3','3','3','3','3','2','2','2','2','2','2','2','1','1','2','2','2','2','2','2','0','0','0','0','-','2','2','2','2','3','3','3','0','0','0','0','0']
    },
    {
      value: '26',
      label: 'ELSA',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['3','3','3','3','3','1','1','1','1','1','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','-','2','2','2','3','3','3','0','0','0','0','0']
    },
    {
      value: '27',
      label: 'TA PALMA',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['3','3','3','3','3','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','-','0','0','3','3','3','0','0','0','0','0']
    },
    {
      value: '28',
      label: 'GUAYMITA',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['3','3','3','3','3','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','0','-','0','3','3','3','0','0','0','0','0']
    },
    {
      value: '29',
      label: 'XARATANGA 3',
      status: 'No Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['3','3','3','3','3','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','0','0','-','3','3','3','0','0','0','0','0']
    },
    {
      value: '30',
      label: 'C. MEZQUITE',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','-','3','3','2','2','2','2','2']
    },
    {
      value: '31',
      label: 'C. OBREGON',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','-','3','2','2','2','2','2']
    },
    {
      value: '32',
      label: 'HUATABAMPO',
      status: 'No Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','-','2','2','2','2','2']
    },
    {
      value: '33',
      label: 'OFICINA GENERALES',
      status: 'No Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','-','1','1','1','1']
    },
    {
      value: '34',
      label: 'ALMACEN GENERAL',
      status: 'No Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','-','1','1','1']
    },
    {
      value: '35',
      label: 'PLANTA DE ALIMENTOS',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','-','0','0']
    },
    {
      value: '36',
      label: 'PLANTA TIF 227',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','-','3']
    },
    {
      value: '37',
      label: 'VENTA DE REZAGA',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8','11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '10', '17', '19', '30'],
      noches: ['3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','3','-']
    },
  ];

export default ciudades;