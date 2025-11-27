"""create status_checks table

Revision ID: 0001_create_status_checks_table
Revises: 
Create Date: 2025-11-27 00:00:00.000000
"""
from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = '0001_create_status_checks_table'
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        'status_checks',
        sa.Column('id', sa.String(), primary_key=True),
        sa.Column('client_name', sa.String(), nullable=False),
        sa.Column('timestamp', sa.String(), nullable=False),
    )


def downgrade() -> None:
    op.drop_table('status_checks')
