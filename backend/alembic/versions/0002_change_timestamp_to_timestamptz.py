"""change timestamp to timestamptz

Revision ID: 0002_change_timestamp_to_timestamptz
Revises: 0001_create_status_checks_table
Create Date: 2025-11-28 00:00:00.000000
"""
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = '0002_change_timestamp_to_timestamptz'
down_revision = '0001_create_status_checks_table'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # Change the column type from string to timezone-aware timestamp
    # Use postgresql USING clause to safely cast existing text values to timestamptz
    op.alter_column(
        'status_checks',
        'timestamp',
        existing_type=sa.String(),
        type_=sa.DateTime(timezone=True),
        existing_nullable=False,
        postgresql_using="timestamp::timestamptz",
    )


def downgrade() -> None:
    # Revert column back to string (text)
    op.alter_column(
        'status_checks',
        'timestamp',
        existing_type=sa.DateTime(timezone=True),
        type_=sa.String(),
        existing_nullable=False,
        postgresql_using="timestamp::text",
    )
