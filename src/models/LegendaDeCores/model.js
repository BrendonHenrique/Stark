legenda_de_cores: [{
      label: "Curto",
      valor: "#2d8515"
    },
    {
      label: "Aberto",
      valor: "#ffffff"
    },
    {
      label: "Não lido por chaveador",
      valor: "#19b6ff"
    },
    {
      label: "Falha chaveador",
      valor: "#7e0bd6"
    },
    {
      label: "Sem nível de produto",
      valor: "#b8aeae"
    },
    {
      label: "Sensor com erro",
      valor: "#080808"
    },
    {
      label: "Temperaturas baixas",
      valor: "#f7ff00"
    },
    {
      label: "Temperaturas altas",
      valor: "#ff1212"
    }
  ],
// Valores correspondentes ao gradiente de cores , quanto mais próximo do valor 
// de temperatura_min mais próximo será do primeiro valor no gradiente ( temperatura baixa )
// quanto mais próximo do temperatura_alta mais próximo será do segundo valor ( temperatura alta )
  configuracoes_de_cores: {
    temperatura_baixa: 10,
    temperatura_alta: 40
  } 