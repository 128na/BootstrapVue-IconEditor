export default {
  methods: {
    /**
     * 指定アイテムが選択済みなら選択を解除する。そうでなければ他のアイテムを選択解除し、指定アイテムを選択する
     */
    handleSelect(iconsets_index) {
      const selected_index = this.selected.indexOf(iconsets_index);
      if (selected_index !== -1) {
        this.selected.splice(0, this.selected.length);
      } else {
        this.selected.splice(0, this.selected.length, iconsets_index);
      }
    },
    /**
     * 指定アイテムが選択済みなら選択を解除する。そうでなければ指定アイテムを選択する
     */
    handleCtrlSelect(iconsets_index) {
      const selected_index = this.selected.indexOf(iconsets_index);
      if (selected_index !== -1) {
        this.selected.splice(selected_index, 1);
      } else {
        this.selected.push(iconsets_index);
      }
    },
    /**
     * 選択済みアイテムが0なら指定アイテムを選択する。
     * 選択済みアイテムが1以上なら指定アイテムを含めた最小インデックスから最大インデックスの間のアイテムをすべて選択する。
     */
    handleShiftSelect(iconsets_index) {
      if (this.selected.length === 0) {
        return this.handleSelect(iconsets_index);
      }
      const min_selected_index = Math.min(this.selected[0], iconsets_index);
      const max_selected_index = Math.max(this.selected[0], iconsets_index);
      [...new Array(1 + max_selected_index - min_selected_index)]
        .map((_, i) => i + min_selected_index)
        .map(index => {
          const selected_index = this.selected.indexOf(index);
          if (selected_index === -1) {
            this.selected.push(index);
          }
        });
    },
  }
}