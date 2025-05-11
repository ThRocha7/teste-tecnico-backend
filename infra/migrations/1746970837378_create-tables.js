/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  pgm.createTable("leads", {
    id: {
      type: "serial",
      notNull: true,
      primaryKey: true,
    },
    name: {
      type: "VARCHAR(255)",
      notNull: true,
    },
    email: {
      type: "VARCHAR(255)",
      notNull: true,
      unique: true,
    },
  });

  pgm.createTable("intentions", {
    id: {
      type: "serial",
      notNull: true,
      primaryKey: true,
    },
    zipcode_start: {
      type: "VARCHAR(8)",
      notNull: true,
    },
    zipcode_end: {
      type: "VARCHAR(8)",
      notNull: true,
    },
    lead_id: {
      type: "int",
      references: "leads",
      onDelete: "CASCADE",
    },
  });
};
