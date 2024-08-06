import unittest
import pandas as pd
from bike_investigation import time_stats, station_stats, trip_duration_stats, user_stats

class TestBikeShareData(unittest.TestCase):

    def test_time_stats(self):
        data = {
            'Start Time': ['2017-01-01 09:07:57', '2017-01-02 09:07:57', '2017-01-03 00:07:57'],
            'End Time': ['2017-01-01 09:20:53', '2017-01-02 09:20:53', '2017-01-03 00:20:53'],     
        }

        # TO DO : create a panda DataFrame from the data dictionary

        result = time_stats(df)

        self.assertEqual(result['mostCommonMonth'], ['january'])
        # TO DO : add more tests for the other keys in the result dictionary

    def test_time_stats_missing_data(self):
    # TO DO : base on the above test, create tests for station_stats, trip_duration_stats and user_stats function. Make sure you cover common corner cases.  

    
if __name__ == '__main__':
    unittest.main()