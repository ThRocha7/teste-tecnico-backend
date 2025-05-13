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
    creat_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("CURRENT_TIMESTAMP"),
    },
  });

  pgm.createTable("intentions", {
    id: {
      type: "serial",
      notNull: true,
      primaryKey: true,
    },
    zipcode_start: {
      type: "VARCHAR(9)",
      notNull: true,
    },
    zipcode_end: {
      type: "VARCHAR(9)",
      notNull: true,
    },
    creat_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("CURRENT_TIMESTAMP"),
    },
    lead_id: {
      type: "int",
      references: "leads",
      onDelete: "CASCADE",
    }
  });
};
