import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

import streamlit as st
import preprocessor
import seaborn as sns
import plotly.express as px
import plotly.figure_factory as ff

import warnings
warnings.filterwarnings("ignore")

df_microsoft= pd.read_csv('Microsoft.csv')
df_oracle= pd.read_csv('Oracle.csv')

st.sidebar.title("PLACEMENT ANALYSIS")
st.sidebar.image('CareerSync.png')

user_menu= st.sidebar.radio(
    'Select an Option: ',
    ('Overall Analysis','Branch-wise Analysis','Company-wise Analysis','Placed Student Analysis')
)

# Currently focussing only on the present year and IT Branch
selected_year= st.sidebar.selectbox('Select Year', list(range(2020,2024)))
selected_branch = st.sidebar.selectbox('Select Branch', ['All','IT', 'CSE', 'ECE', 'EE','Other Branches'])

custom_css = """
    <style>
        .highlighted-title {
            color: #FFFFFF; 
            font-weight: bold;
            font-size: 40px;
            text-decoration: underline
        }
    </style>

    """

if user_menu=='Overall Analysis':

    st.markdown(custom_css, unsafe_allow_html=True)
    st.markdown('<p class="highlighted-title">OVERALL PLACEMENT ANALYSIS</p>', unsafe_allow_html=True)

    
    # CGPA distribution
    st.subheader("CGPA Distribution")
    fig_cgpa= px.histogram(df_microsoft, x='CGPA', nbins=20, title='Overall CGPA Scores of Students', labels={'CGPA': 'CGPA Score', 'count': 'Frequency'})
    fig_cgpa.update_traces(marker_color='royalblue', marker_line_color='black', marker_line_width=1.5)
    fig_cgpa.update_layout(showlegend=False)
    st.plotly_chart(fig_cgpa)

    # Mean, Max, Min, Median, and Mode CGPA analysis
    mean_cgpa= df_microsoft['CGPA'].mean()
    max_cgpa= df_microsoft['CGPA'].max()
    min_cgpa= df_microsoft['CGPA'].min()
    median_cgpa= df_microsoft['CGPA'].median()
    mode_cgpa= df_microsoft['CGPA'].mode()

    st.subheader("CGPA Analysis")
    st.write(f"Mean CGPA: **{mean_cgpa:.2f}**")
    st.write(f"Max CGPA: **{max_cgpa:.2f}**")
    st.write(f"Min CGPA: **{min_cgpa:.2f}**")
    st.write(f"Median CGPA: **{median_cgpa:.2f}**")
    st.write(f"Mode CGPA: **{mode_cgpa.values[0]:.2f}**")

    st.write("---") 
    st.write("")

    # Branch Focus
    st.subheader("Students per Branch")
    branch_counts= df_microsoft['Branch'].value_counts()
    fig_branch= px.bar(branch_counts, x=branch_counts.index, y=branch_counts.values, labels={'x':'Branch','y':'Count'}, title='Branches Focus')
    fig_branch.update_traces(marker_line_color='black', marker_line_width=1)
    fig_branch.update_layout(showlegend=False)
    st.plotly_chart(fig_branch)

    st.subheader("Placed Distribution")

    # Select Company
    selected_company= st.selectbox('Select Company',['Microsoft', 'Oracle'])
    if selected_company=='Microsoft':
        placed_counts= df_microsoft['Placed'].value_counts()
    elif selected_company=='Oracle':
        placed_counts= df_oracle['Placed'].value_counts()

    fig_placed= px.pie(placed_counts, values=placed_counts.values, names=placed_counts.index, title='Placed Distribution')
    fig_placed.update_traces(marker=dict(colors=['green','red'], line=dict(color='#000000',width=2)))
    st.plotly_chart(fig_placed)

    # Branch vs CGPA
    st.subheader("Branch vs CGPA")
    fig_branch_cgpa= px.box(df_microsoft, x='Branch', y='CGPA', title='Branch vs CGPA', color='Branch')
    fig_branch_cgpa.update_traces(marker_line_color='black', marker_line_width=1.5)
    fig_branch_cgpa.update_layout(showlegend=False)
    st.plotly_chart(fig_branch_cgpa)

    # 10th and 12th Marks
    st.subheader("10th and 12th Marks")
    fig_marks= px.scatter(df_microsoft, x='10th Percentage',y='12th Percentage',title='10th vs 12th Marks',color='Branch')
    fig_marks.update_traces(marker_line_color='black',marker_line_width=1.5)
    fig_marks.update_layout(showlegend=True)
    st.plotly_chart(fig_marks)

elif user_menu=='Placed Student Analysis':
    st.markdown(custom_css, unsafe_allow_html=True)
    st.markdown('<p class="highlighted-title">PLACED STUDENT ANALYSIS</p>', unsafe_allow_html=True)
    
    selected_company= st.selectbox('Select Company',['Microsoft','Oracle'])
    if selected_company=='Microsoft':
        df_placed= df_microsoft[df_microsoft['Placed']=='YES']
    elif selected_company=='Oracle':
        df_placed= df_oracle[df_oracle['Placed']=='Yes']
    
    selected_gender= st.radio("Select Gender",('All','Male','Female'))
    if selected_gender!= 'All':
        df_placed = df_placed[df_placed['Gender']==selected_gender] 

    # CGPA trends for placed students
    st.subheader("CGPA Trends for Placed Students")
    fig_cgpa_placed= px.line(df_placed, x=df_placed['Name'], y='CGPA', title='CGPA Trends for Placed Students')
    # fig_cgpa_placed= px.line(df_placed, x=df_placed['Branch'], y='CGPA', title='CGPA Trends for Placed Students')
    fig_cgpa_placed.update_traces(marker_color='green', marker_line_color='black', marker_line_width=1.5)
    st.plotly_chart(fig_cgpa_placed)

    # Branch distribution for placed students
    st.subheader("Branch Distribution for Placed Students")
    branch_counts_placed= df_placed['Branch'].value_counts()
    fig_branch_placed= px.bar(branch_counts_placed, x=branch_counts_placed.index, y=branch_counts_placed.values, labels={'x':'Branch', 'y':'Count'}, title='Branch Distribution')
    fig_branch_placed.update_traces(marker_line_color='black', marker_line_width=1.5)
    st.plotly_chart(fig_branch_placed)

    # 10th and 12th Marks for placed students
    st.subheader("10th and 12th Marks for Placed Students")
    fig_marks_placed= px.scatter(df_placed, x='10th Percentage', y='12th Percentage', title='10th vs 12th Marks for  Placed Students', color='Branch')
    fig_marks_placed.update_traces(marker_line_color='black', marker_line_width=1.5)
    fig_marks_placed.update_layout(showlegend=True)
    st.plotly_chart(fig_marks_placed)


elif user_menu=='Branch-wise Analysis':
    st.markdown(custom_css, unsafe_allow_html=True)
    st.markdown('<p class="highlighted-title">BRANCH-WISE PLACEMENT ANALYSIS</p>', unsafe_allow_html=True)
    
    # Select Company
    selected_company= st.selectbox('Select Company',['Microsoft','Oracle'])

    if selected_company=='Microsoft':
        company=df_microsoft
    elif selected_company=='Oracle':
        company=df_oracle

    # Select Branch
    selected_branch= st.selectbox('Select Branch', company['Branch'].unique())

    # CGPA distribution for selected branch
    st.subheader(f"CGPA Distribution")
    fig_cgpa_branch= px.histogram(company[company['Branch']==selected_branch], x='CGPA', nbins=20, title=f'CGPA Distribution of the students opted', labels={'CGPA': 'CGPA Score', 'count': 'Frequency'})
    fig_cgpa_branch= px.histogram(company[company['Branch']==selected_branch], x='CGPA', nbins=20, title=f'CGPA Distribution of the students opted', labels={'CGPA': 'CGPA Score', 'count': 'Frequency'})
    fig_cgpa_branch.update_traces(marker_color='green', marker_line_color='black', marker_line_width=1.5)
    fig_cgpa_branch.update_layout(showlegend=False)
    st.plotly_chart(fig_cgpa_branch)

    # Gender ratio in selected branch
    st.subheader(f"Gender Ratio")
    gender_ratio = company[company['Branch'] == selected_branch]['Gender'].value_counts()
    fig_gender_ratio = px.bar(x=gender_ratio.index, y=gender_ratio.values, title=f"Gender Ratio", color=gender_ratio.index, color_discrete_map={'Male': 'blue', 'Female': 'pink'})
    fig_gender_ratio.update_layout(xaxis_title="Gender", yaxis_title="Count")
    st.plotly_chart(fig_gender_ratio)



elif user_menu=='Company-wise Analysis':
    st.markdown(custom_css, unsafe_allow_html=True)
    st.markdown('<p class="highlighted-title">COMPANY-WISE PLACEMENT ANALYSIS</p>', unsafe_allow_html=True)
    
    # Select Company
    selected_company= st.selectbox('Select Company',['Microsoft','Oracle'])

    if selected_company=='Microsoft':
        company= df_microsoft
    else:
        company= df_oracle

    # CGPA distribution for selected company
    st.subheader(f"CGPA Distribution for {selected_company}")
    fig_cgpa_company= px.histogram(company, x='CGPA', nbins=20, title=f'CGPA Distribution for {selected_company}', labels={'CGPA': 'CGPA Score', 'count': 'Frequency'})
    fig_cgpa_company.update_traces(marker_color='red', marker_line_color='black', marker_line_width=1.5)
    fig_cgpa_company.update_layout(showlegend=False)
    st.plotly_chart(fig_cgpa_company)

    # Branches focus for selected company
    st.subheader(f"Students opted per branch for {selected_company}")
    branch_counts_company= company['Branch'].value_counts()
    fig_branch_company= px.bar(branch_counts_company, x=branch_counts_company.index, y=branch_counts_company.values, labels={'x':'Branch', 'y':'Count'}, title=f'Branches Focus for {selected_company}', color=branch_counts_company.index)
    fig_branch_company.update_traces(marker_line_color='black', marker_line_width=1.5)
    fig_branch_company.update_layout(showlegend=False)
    st.plotly_chart(fig_branch_company)

    # 10th and 12th Marks for selected company
    st.subheader(f"10th and 12th Marks of the students applying for {selected_company}")
    fig_marks_company= px.scatter(company, x='10th Percentage', y='12th Percentage', title=f'10th vs 12th Marks for {selected_company}', color='Branch')
    fig_marks_company.update_traces(marker_line_color='black', marker_line_width=1.5)
    fig_marks_company.update_layout(showlegend=True)
    st.plotly_chart(fig_marks_company)
