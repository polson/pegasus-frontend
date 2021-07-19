#pragma once
#include <QJsonArray>

#include "utils/HashMap.h"

class QVariant;

namespace providers
{
	namespace playnite
	{
		class JsonObject
		{
		public:
			explicit JsonObject(const QString& file_path);
			explicit JsonObject(const QJsonObject& json_object);
			QString getString(const QString& key) const;
			QStringList getStringList(const QString& key) const;
			QJsonArray getJsonArray(const QString& key) const;
			JsonObject getJsonObject(const QString& key) const;
			bool getBool(const QString& key) const;
			float getFloat(const QString& key) const;
			int getInt(const QString& key) const;
		private:
			const QHash<QString, QVariant> json_map;
		};
	}
}
