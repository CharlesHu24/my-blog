<template>
  <div>
    <h1>用户列表</h1>
    <el-table>
      <el-table-column prop="_id" label="ID" width="250"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template>
          <el-button
              type="text"
              size="small"
              icon="el-icon-delete">
            删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
name: "UserList"
}
</script>

<style scoped>

</style>