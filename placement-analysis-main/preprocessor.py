import numpy as np
import pandas as pd
import streamlit as st

def fun(df):
    # filtering for eligible candidates with CGPA>=7
    df= df[df['CGPA']>=7]

    df.drop_duplicates(inplace=True)
    # one hot encoding Branches- CSE, IT, ECE, EE
    df.drop_duplicates(inplace=True)
    df= df[df['Branch'] in list(['CSE','IT','ECE','EE'])]
    df= pd.concat([df,pd.get_dummies(df['Branch'])],axis=1)

    return df
