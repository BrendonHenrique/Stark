<template>
  <div class="glass-card col-sm-12 col-xs-12 col-md-12 col-lg-8">

    <q-table
      loading
      title="Histórico"
      :data="data"
      :columns="columns"
      row-key="name"
      dark
      color="amber"
      rows-per-page-label="Históricos por página"
      :visible-columns="visibleColumns"
    >
       <template v-slot:top="props">
        
        <div class="q-gutter-xs" 
        style="display: flex; align-items: center; flex-direction: column;">
        
         <q-avatar  size="110px" color="bg-grey-4 shadow-6">
            <q-img  src="assets/icons/metrics.svg" style="margin-top:10px;height: 80px;width:80px;"  />
          </q-avatar>

          <q-space />

          <div>
             <span>
               Selecione as colunas que deseja exibir
             </span>

             <q-select
                v-model="visibleColumns"
                multiple
                borderless
                dense
                options-dense
                :display-value="$q.lang.table.columns"
                emit-value
                map-options
                :options="columns"
                option-value="name"
                style="min-width: 150px"
              />
           </div>
          </div> 
          
        </template>

    </q-table>

  </div>
</template>
<script>
export default {
  data () {
    return {
      visibleColumns: [
        'data',
        'sensor-1',
        'sensor-2',
        'sensor-3',
        'sensor-4',
        'aeracao',
        'modo-aeracao',
        'tempo-aeracao',
      ],
      columns: [
        {
          name:'data',
          required: true,
          label: 'Data',
          align: 'center',
          field: row => row.date,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'sensor-1', align: 'center', label: 'Temp sensor 1', field: 'tempSensor1', sortable: true },
        { name: 'sensor-2', align: 'center', label: 'Temp sensor 2', field: 'tempSensor2', sortable: true },
        { name: 'sensor-3', align: 'center', label: 'Temp sensor 3', field: 'tempSensor3', sortable: true },
        { name: 'sensor-4', align: 'center', label: 'Temp sensor 4', field: 'tempSensor4', sortable: true },
        { name: 'aeracao', align: 'center', label: 'Aeração', field: 'aeracao' , sortable: true},
        { name: 'modo-aeracao', align: 'center', label: 'Modo de aeração', field: 'modoDeAeracao', sortable: true },
        { name: 'tempo-aeracao', align: 'center', label: 'Temp de aeração', field: 'tempoDeAeracao', sortable: true },
      ],
      data: [ // cada data é uma data diferente 
        {
          date: '10/12/2019',
          tempSensor1: 19,
          tempSensor2: 6,
          tempSensor3: 21,
          tempSensor4: 17,
          aeracao: 'Ligado',
          modoDeAeracao: 'Manual',
          tempoDeAeracao: '02:32',
        },
        {
          date: '11/12/2019',
          tempSensor1: 21,
          tempSensor2: 16,
          tempSensor3: 22,
          tempSensor4: 14,
          aeracao: 'Ligado',
          modoDeAeracao: 'Automático',
          tempoDeAeracao: '04:32',
        },
        {
          date: '12/12/2019',
          tempSensor1: 21,
          tempSensor2: 13,
          tempSensor3: 11,
          tempSensor4: 12,
          aeracao: 'Desligado',
          modoDeAeracao: '',
          tempoDeAeracao: '',
        }
      ]
    }
  }
}
</script>

<style lang="stylus" >
  .q-table__top{
    justify-content:center;
  }
</style>