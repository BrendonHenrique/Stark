<template>
  <div>
    <q-card-section>
      <q-item>
        <q-item-section avatar>
          <slot name="avatar">

          </slot>
        </q-item-section>
        <q-item-section>
          <q-item-label>
           <slot name="label">

            </slot>
          </q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
    <q-separator color="grey-4" />
  </div>
</template>
