<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="6">
      <user-form :uid="$route?.params?.id" url="/drivers" show />
    </v-col>
  </v-row>
</template>
