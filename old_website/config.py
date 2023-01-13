"""
Configuration of the wrapper server and logging.
"""
import logging as log
from pathlib import Path

log_path: str = f'{Path(__file__).parent.resolve()}/my_debug.log'

log.basicConfig(
    filename=log_path,
    level=log.INFO,
    format='[%(asctime)s] %(message)s'
)
