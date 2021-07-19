#include "PlayniteJsonHelper.h"

#include <QDir>
#include <QJsonObject>

#include "Log.h"
#include "model/gaming/GameFile.h"
#include "providers/JsonCacheUtils.h"
#include "utils/HashMap.h"

class QVariant;

namespace {
	QHash<QString, QVariant> get_json_map(const QString& file_path)
	{
		QFile file(file_path);
		if (!file.open(QIODevice::ReadOnly | QIODevice::Text)) {
			Log::info(LOGMSG("Could not open %1").arg(QDir::toNativeSeparators(file_path)));
			return {};
		}

		QJsonParseError jsonError{};
		const QJsonDocument json_doc = QJsonDocument::fromJson(file.readAll(), &jsonError);
		if (jsonError.error != QJsonParseError::NoError) {
			Log::info(LOGMSG("Invalid JSON file at %1").arg(file_path));
			return {};
		}
		return json_doc.object().toVariantHash();
	}
}

namespace providers
{
	namespace playnite
	{
		JsonObject::JsonObject(const QString& file_path)
			:json_map(get_json_map(file_path))
		{}

		JsonObject::JsonObject(const QJsonObject& json_object)
			: json_map(json_object.toVariantHash())
		{
		}

		QString JsonObject::getString(const QString& key) const
		{
			return json_map.value(key).toString();
		}

		QStringList JsonObject::getStringList(const QString& key) const
		{
			return json_map.value(key).toStringList();
		}

		QJsonArray JsonObject::getJsonArray(const QString& key) const
		{
			return json_map.value(key).toJsonArray();
		}

		JsonObject JsonObject::getJsonObject(const QString& key) const
		{
			return JsonObject(json_map.value(key).toJsonObject());
		}

		bool JsonObject::getBool(const QString& key) const
		{
			return json_map.value(key, false).toBool();
		}

		float JsonObject::getFloat(const QString& key) const
		{
			return json_map.value(key).toFloat();
		}

		int JsonObject::getInt(const QString& key) const
		{
			return json_map.value(key).toInt();
		}
	}
}

