import pymysql
from flask import Flask, jsonify, request
from flask_restful import Resource , Api

app = Flask(__name__)
api = Api(app)

class IOT(Resource):
    def get(self):
        db = pymysql.connect("remotemysql.com","XpBugLOOvh","Ej9DTJfZSi","XpBugLOOvh")
        cursor = db.cursor()
        query = """select * from tbltemp"""
        cursor.execute(query)
        data=cursor.fetchall()
        payload = []
        content = {}
        for row in data:
            print(row)
            content = {'sensorid': row[0], 'sensordata': row[1]}
            payload.append(content)
            
        db.close()
    
        return jsonify(payload)
        
    def post(self):
        some_json = request.get_json()
        db = pymysql.connect("remotemysql.com","XpBugLOOvh","Ej9DTJfZSi","XpBugLOOvh")
        cursor = db.cursor()
        query="""INSERT INTO tbltemp VALUES({},{})""".format(some_json["sensorid"],some_json["sensordata"])
        cursor.execute(query)
        db.commit()
        db.close()
        
        return{'Response': 'Inserted successfully'},201
    
api.add_resource(IOT, '/')

#Here is changes
if __name__ == "__main__":
    app.run(debug=True)
