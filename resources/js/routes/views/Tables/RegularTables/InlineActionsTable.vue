<template>
  <b-card no-body>
    <b-card-header class="border-0">
      <b-row >
        <b-col cols="6">
          <h3 class="mb-0">Inline actions</h3>
        </b-col>
        <b-col cols="6" class="text-right">
          <el-tooltip content="Export" placement="top">
            <base-button type="neutral" icon size="sm">
              <span class="btn-inner--icon"><i class="fas fa-user-edit"></i></span>
              <span class="btn-inner--text">Export</span>
            </base-button>
          </el-tooltip>
        </b-col>
      </b-row>
    </b-card-header>

    <el-table class="table-responsive align-items-center table-flush"
              header-row-class-name="thead-light"
              :data="users">
      <el-table-column label="Author"
                       min-width="310px"
                       prop="name"
                       sortable>
        <template v-slot="{row}">
          <b-img :src="row.image" rounded="circle" class="avatar mr-3" />
          <b>{{row.name}}</b>
        </template>
      </el-table-column>
      <el-table-column label="Created At"
                       prop="createdAt"
                       min-width="140px"
                       sortable>
      </el-table-column>

      <el-table-column label="Product"
                       min-width="200px"
                       prop="product"
                       sortable>
        <template v-slot="{row}">
          <a href="#!" class="font-weight-bold">{{row.product}}</a>
        </template>
      </el-table-column>

      <el-table-column min-width="180px" align="center">
        <div slot-scope="{row}" class="table-actions">
          <el-tooltip content="Edit" placement="top">
            <a href="#!" @click.prevent="onEdit(row)" class="table-action" data-toggle="tooltip" data-original-title="Edit product">
              <i class="fas fa-user-edit"></i>
            </a>
          </el-tooltip>
          <el-tooltip content="Delete" placement="top">
            <a href="#!" @click.prevent="onDelete(row)" class="table-action table-action-delete" data-toggle="tooltip"
               data-original-title="Delete product">
              <i class="fas fa-trash"></i>
            </a>
          </el-tooltip>
        </div>
      </el-table-column>
    </el-table>

  </b-card>
</template>
<script>
  import users from './../users'
  import { Table, TableColumn, DropdownMenu, DropdownItem, Dropdown, Tooltip } from 'element-ui'

  export default {
    name: 'inline-actions-table',
    components: {
      [Tooltip.name]: Tooltip,
      [Table.name]: Table,
      [TableColumn.name]: TableColumn,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
    },
    data() {
      return {
        users,
        currentPage: 1
      };
    },
    methods: {
      onEdit(row) {
        alert(`You want to edit ${row.name}`)
      },
      onDelete(row) {
        alert(`You want to delete ${row.name}`)
      },
    }
  }
</script>
