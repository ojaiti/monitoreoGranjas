const ciudades = [
    {
      value: '1',
      label: 'Aguascalientes, Aguascalientes',
      status: 'No libre',
      destinosConAutorizacion:['1', '2', '3', '5', '6', '7', '8', '9', '10', '11', '12', '13','16','18','19','20', '21','22', '23', '24', '25', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['4', '14', '15', '17', '26', '38']
    },
    {
      value: '2',
      label: 'Ajalpan, Puebla',
      status: 'No libre',
      destinosConAutorizacion:['1', '3','4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14','15','16','17','18','19','20', '21','22', '23', '24', '25', '26', '27', '28', '29','30', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: [  '0'  ]
    },
    {
      value: '3',
      label: 'Campeche, Campeche',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['19', '23']
    },
    {
      value: '4',
      label: 'Celaya, Guanajuato',
      status: 'No libre',
      destinosConAutorizacion:[ '2', '3','4', '5', '6', '7', '8', '10', '12', '13','16','18','20', '21','22', '23', '24', '25', '27', '28', '29', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['1','9', '11', '14', '15', '17', '26', '31', '38']
    },
    {
      value: '5',
      label: 'Chontalpa, Veracruz',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '8','9', '10', '11', '12', '13', '14','16','18','20','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['7', '21']
    },
    {
      value: '6',
      label: 'Coatzacalcos, Veracruz',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '6', '7', '10', '11', '12', '13', '14','16','18','20','22', '23', '24', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['5', '8', '21', '25', '30']
    },
    {
      value: '7',
      label: 'Cotaxtla, Veracruz',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','18','20', '21','22', '23', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['16', '24', '25']
    },
    {
      value: '8',
      label: 'Cuernavaca, Morelos',
      status: 'No libre',
      destinosConAutorizacion:['1', '3', '5', '6', '7', '8', '10', '11', '12', '13', '14','18','20', '21','22', '23', '24', '27', '28', '29', '33', '34', '36', '37'],
      destinosConPrevencion: ['2', '4', '25', '26', '30', '31', '32', '35']
    },
    {
      value: '9',
      label: 'Culiacan, Sinaloa',
      status: 'Libre',
      destinosConAutorizacion:['1','2', '3','4', '5', '7', '8', '10', '11', '12', '14','16','17','21','22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['6', '13', '18', '20']
    },
    {
      value: '10',
      label: 'Dolores Hidalgo, Guanajuato',
      status: 'No libre',
      destinosConAutorizacion:['1', '2', '3', '5', '6', '7', '8', '10', '11', '12', '13','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['1', '4', '14', '15', '17']
    },
    {
      value: '11',
      label: 'Cd. Obregón Sonora',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
    {
      value: '12',
      label: 'Hermosillo, Sonora',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '11', '12', '13', '14','16','18', '21', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['10', '18', '20', '22']
    },
    {
      value: '13',
      label: 'Huachi y Loma Alta, Jalisco',
      status: 'No libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
    {
      value: '14',
      label: 'La tinaja, San Luis Potosí',
      status: 'No libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
    {
      value: '15',
      label: 'La tinaja, Veracruz',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
    {
      value: '16',
      label: 'Lagos de Moreno, Jalisco',
      status: 'No libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
    {
      value: '17',
      label: 'Los Mochis, Sinaloa',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
    {
      value: '18',
      label: 'Merida, Yucatán',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
    {
      value: '19',
      label: 'Mexicali, Baja California Norte',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
    {
      value: '20',
      label: 'Monterrey, Nuevo León',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
    {
      value: '21',
      label: 'Minantitlán, Veracruz',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
    {
      value: '22',
      label: 'Nohbec, Quintana Roo',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
    {
      value: '23',
      label: 'Omealca, Veracruz',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
    {
      value: '24',
      label: 'Paso del Toro, Veracruz',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
    {
      value: '25',
      label: 'Querétaro, Querétaro',
      status: 'No Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
    {
      value: '26',
      label: 'Ramos Arizpe, Coahuila',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
    {
      value: '27',
      label: 'Omealca, Veracruz',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
    {
      value: '28',
      label: 'Paso del Toro, Veracruz',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
    {
      value: '29',
      label: 'Querétaro, Querétaro',
      status: 'No Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
    {
      value: '30',
      label: 'Ramos Arizpe, Coahuila',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
    {
      value: '31',
      label: 'Saltillo, Coahuila',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
    {
      value: '32',
      label: 'Siho, Yucatán',
      status: 'No Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
    {
      value: '33',
      label: 'San Juan Ixcaquixtla, Puebla',
      status: 'No Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
    {
      value: '34',
      label: 'Tecamachalco, Puebla',
      status: 'No Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
    {
      value: '35',
      label: 'Tesopaco, Sonora',
      status: 'Libre',
      destinosConAutorizacion:['1', '2', '3','4', '5', '6', '7', '8', '10', '11', '12', '13', '14','16','18','20', '21','22', '23', '24', '25', '26', '27', '28', '29', '31', '32', '33', '34', '35', '36', '37'],
      destinosConPrevencion: ['9', '15', '17', '19', '30']
    },
  ];

export default ciudades;