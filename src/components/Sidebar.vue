<template>
  <div id="instruc">
        <table>
            <tr>
                <td><p>Opgave:</p></td>
                <td><P>{{ task }}</p></td>
            </tr>
            <tr>
                <td>Instruction:</td>
                <td><p>{{ desc }}</P></td>
            </tr>
        </table>
  </div>
</template>

<script>
export default {
  props: {
    task: String,
    desc: String
  }
  ["desc"]
};
</script>

<style></style>
