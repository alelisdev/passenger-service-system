<template> 
  <div>
    <base-header class="pb-6">
      <b-row align-v="center" class="py-4">
        <b-col lg="6" cols="7">
          <h6 class="h2 text-white d-inline-block mb-0">Tables</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <route-bread-crumb></route-bread-crumb>
          </nav>
        </b-col>
        <b-col lg="6" cols="5" class="text-right">
          <base-button size="sm" type="neutral">New</base-button>
          <base-button size="sm" type="neutral">Filters</base-button>
        </b-col>
      </b-row>
    </base-header>
    <b-container fluid class="mt--6">
      <b-row>
        <b-col>
          <light-table/>
        </b-col>
      </b-row>
      <inline-actions-table></inline-actions-table>
      <striped-table></striped-table>
      <checkbox-table></checkbox-table>
      <checkbox-colored-table></checkbox-colored-table>
      <translucent-table></translucent-table>
      <dark-table></dark-table>
    </b-container>
  </div>
</template>
<script>
  import { Dropdown, DropdownItem, DropdownMenu, Table, TableColumn } from 'element-ui';
  import RouteBreadCrumb from '@/components/Breadcrumb/RouteBreadcrumb'
  import projects from './projects'
  import users from './users'
  import LightTable from "./RegularTables/LightTable";
  import InlineActionsTable from "./RegularTables/InlineActionsTable";
  import StripedTable from "./RegularTables/StripedTable";
  import CheckboxTable from "./RegularTables/CheckboxTable";
  import CheckboxColoredTable from "./RegularTables/CheckboxColoredTable";
  import TranslucentTable from "./RegularTables/TranslucentTable";
  import DarkTable from "./RegularTables/DarkTable";

  export default {
    components: {
      LightTable,
      InlineActionsTable,
      StripedTable,
      CheckboxTable,
      CheckboxColoredTable,
      TranslucentTable,
      DarkTable,
      RouteBreadCrumb,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn
    },
    data() {
      return {
        projects,
        users
      };
    }
  };
</script>
