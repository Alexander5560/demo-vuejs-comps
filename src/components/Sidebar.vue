<template>
  <div id="instruc">
    <table>
      <tr>
        <td><p>Opgave:</p></td>
        <td>
          <P>{{ task }}</P>
        </td>
      </tr>
      <tr>
        <td>Instruction:</td>
        <td>
          <p>{{ desc }}</p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    task: String,
    desc: String
  }["desc"]
};
</script>

<style></style>
