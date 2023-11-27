<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Nombre">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Pais">{{ item.country }}</md-table-cell>
        <md-table-cell md-label="Ciudad">{{ item.city }}</md-table-cell>
        <md-table-cell md-label="Numero Amigos">{{ item.friends }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      selected: [],
      users: [
        {
          name: "Dakota Rice",
          friends: "36,738",
          country: "Niger",
          city: "Oud-Turnhout",
        },
        {
          name: "Minerva Hooper",
          friends: "23,738",
          country: "Curaçao",
          city: "Sinaai-Waas",
        },
        {
          name: "Sage Rodriguez",
          friends: "56,142",
          country: "Netherlands",
          city: "Overland Park",
        },
        {
          name: "Doris Greene",
          friends: "63,542",
          country: "Malawi",
          city: "Feldkirchen in Kārnten",
        },
        
      ],
    };
  },
};
</script>
