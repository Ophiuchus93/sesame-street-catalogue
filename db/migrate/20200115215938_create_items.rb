class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.string :genus
      t.string :description
      t.datetime :year
      t.float :value
      t.boolean :batteries
      t.string :battery_size
      t.string :battery_quantity
      t.string :location
      t.string :image
      t.belongs_to :character, null: false, foreign_key: true

      t.timestamps
    end
  end
end
