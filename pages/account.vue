<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="6">
      <user-form :uid="$auth?.user?._id" />
    </v-col>
  </v-row>
</template>
