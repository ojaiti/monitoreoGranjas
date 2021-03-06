const tehuacan = [
    {
      value: '1',
      label: 'PAZOLTEPEC 1A',
      status: 'No libre',
      destinosConAutorizacion:['1','2', '3','4', '5', '6', '7', '8', '9', '10', '11', '12', '13','14','15','16','17','18','19'],
      destinosConPrevencion: ['14', '15', '17', '26', '38'],
      noches: ['-','1','1','0','0','0','0','0','0','0','0','0','0','0']
    },
    {
      value: '2',
      label: 'PAZOLTEPEC 1B',
      status: 'No libre',
      destinosConAutorizacion:['1', '3','4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14','15','16','17','18','19','20', '21','22', '23', '24', '25', '26', '27', '28', '29','30', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: [  '0'  ],
      noches: ['1','-','1','0','0','0','0','0','0','0','0','0','0','0']
    },
    {
      value: '3',
      label: 'SAN LUIS 1C',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['19', '23'],
      noches: ['1','1','-','0','0','0','0','0','0','0','0','0','0','0']
    },
    {
      value: '4',
      label: '2B SAN LUIS',
      status: 'No libre',
      destinosConAutorizacion:[ '2', '3','4', '5', '6', '7', '8', '10', '12', '13','16','18','20', '21','22', '23', '24', '25', '27', '28', '29', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['1','9', '11', '14', '15', '17', '26', '31', '38'],
      noches: ['2','2','2','-','1','2','0','0','0','0','0','0','0','0']
    },
    {
      value: '5',
      label: '2C CACALUAPAN',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '8','9', '10', '11', '12', '13', '14','16','18','20','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['7', '21'],
      noches: ['2','2','2','1','-','2','0','0','0','0','0','0','0','0']
    },
    {
      value: '6',
      label: 'RECRIA SAN BARTOLO',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '6', '7', '10', '11', '12', '13', '14','16','18','20','22', '23', '24', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['5', '8', '21', '25', '30'],
      noches: ['2','2','2','1','1','-','0','0','0','0','0','0','0','0']
    },
    {
      value: '7',
      label: '3B SAN LUIS',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','18','20', '21','22', '23', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['16', '24', '25'],
      noches: ['2','2','2','1','1','2','-','0','0','1','0','0','0','0']
    },
    {
      value: '8',
      label: '3C CACALUAPAN',
      status: 'No libre',
      destinosConAutorizacion:['1', '3', '5', '6', '7', '8', '10', '11', '12', '13', '14','18','20', '21','22', '23', '24', '27', '28', '29', '33', '34', '36', '37'],
      destinosConPrevencion: ['2', '4', '25', '26', '30', '31', '32', '35'],
      noches: ['2','2','2','1','1','2','0','-','0','1','0','0','0','0']
    },
    {
      value: '9',
      label: '3A-3B-3C TEPANCO',
      status: 'Libre',
      destinosConAutorizacion:['1','2', '3','4', '5', '7', '8', '10', '11', '12', '14','16','17','21','22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['6', '13', '18', '20'],
      noches: ['2','2','2','1','1','2','0','0','-','1','0','0','0','0']
    },
    {
      value: '10',
      label: 'CUARENTEA MORA',
      status: 'No libre',
      destinosConAutorizacion:['1', '2', '3', '5', '6', '7', '8', '10', '11', '12', '13','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['1', '4', '14', '15', '17'],
      noches: ['4','4','4','4','4','4','4','4','4','-','0','0','0','0']
    },
    {
      value: '11',
      label: 'OFICINA GENERALES',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['1','1','1','1','1','1','1','1','1','1','-','0','0','0']
    },
    {
      value: '12',
      label: 'ALMACEN GENERAL',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '11', '12', '13', '14','16','18', '21', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['10', '18', '20', '22'],
      noches: ['1','1','1','1','1','1','1','1','1','1','0','-','0','0']
    },
    {
      value: '13',
      label: 'PLANTA DE ALIMENTOS',
      status: 'No libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['0','0','0','0','0','0','0','0','0','0','0','0','-','0']
    },
    {
      value: '14',
      label: 'VENTA DE REZAGA',
      status: 'No libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30'],
      noches: ['3','3','3','3','3','3','3','3','3','3','0','0','0','-']
    }
  ];

export default tehuacan;