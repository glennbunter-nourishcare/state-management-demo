<template>
  <div>
    <b-skeleton
      width="20%"
      :active="true"
    />
    <b-skeleton
      width="40%"
      :active="true"
    />
    <b-skeleton
      width="30%"
      :active="true"
    />
    <b-skeleton
      width="60%"
      :active="true"
    />
  </div>
</template>

<script>
export default {
  name: 'StateLoadingSkeleton'
}
</script>
