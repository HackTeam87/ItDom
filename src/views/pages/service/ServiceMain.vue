<template>
  <div>
    <v-container>
      <div class="d-flex">

      </div>

      <v-expansion-panels
          v-model="panel"
          :disabled="disabled"
          multiple

      >
        <h2>Ціни на встановлення систем контролю доступу, відеонагляду для Киева і області.</h2>

        <v-expansion-panel>

          <v-expansion-panel-content>
            Монтаж 1 камери: 750.грн
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            Монтаж 2-х камер: 650.грн
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            Монтаж 3-4-х камер:550.грн
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            Монтаж 5-8-х камер:450.грн
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            Монтаж від 8 камер:400.грн
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>

          <v-expansion-panel-content>
            Налаштування відеореєстратора:400.грн
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            Налаштування роутера: 150.грн
          </v-expansion-panel-content>

        </v-expansion-panel>
        <v-expansion-panel>

          <v-expansion-panel-content>
            Протяжка кабеля: 15.грн/м
          </v-expansion-panel-content>


        </v-expansion-panel>
        <v-expansion-panel>

          <v-expansion-panel-content>
            Встановлення відеодомофона+визивної панелі: 750.грн
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            Встановлення додаткової виз панелі, камери: 400.грн
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>

          <v-expansion-panel-content>
            Встановлення адаптера для домофонної системи багатоквартирного будинку(vs-01, vz-10): 150.грн
          </v-expansion-panel-content>

        </v-expansion-panel>
        <v-expansion-panel>

          <v-expansion-panel-content>
            Монтаж замка: 650.грн
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            Встановлення Буз: 150.грн
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            Встановлення гнучкого переходу: 150.грн
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            Монтаж дверного доводчика: 450.грн
          </v-expansion-panel-content>


        </v-expansion-panel>
        <v-expansion-panel>

          <v-expansion-panel-content>
            Встановлення контролера скд: 450.грн
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            Встановлення кнопки "вихід": 150.грн
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            Встановлення пристрою безперебійного живлення:250.грн
          </v-expansion-panel-content>

        </v-expansion-panel>
        <v-expansion-panel>

          <v-expansion-panel-content>
            Виїзд спеціаліста для консультації по Київській обл. правий берег: 100.грн
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            Виїзд спеціаліста для консультації по Київській обл. лівий берег: 200.грн
          </v-expansion-panel-content>
          <v-expansion-panel-content>
            Виїзд спеціаліста для консультації по Києву: 0.грн
          </v-expansion-panel-content>

        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    panel: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    disabled: false,
    readonly: false,
  }),
}
</script>